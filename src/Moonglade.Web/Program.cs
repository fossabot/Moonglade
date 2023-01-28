﻿using System.Globalization;
using System.Net;
using System.Text.Json.Serialization;

using AspNetCoreRateLimit;

using Edi.Captcha;

using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights.Extensibility.Implementation;
using Microsoft.AspNetCore.HttpOverrides;

using Moonglade.Data.MySql;
using Moonglade.Data.PostgreSql;
using Moonglade.Data.SqlServer;
using Moonglade.Notification.Client;
using Moonglade.Pingback;
using Moonglade.Syndication;

using SixLabors.Fonts;

using Spectre.Console;

using WilderMinds.MetaWeblog;

using Encoder = Moonglade.Web.Configuration.Encoder;

Console.OutputEncoding = Encoding.UTF8;
Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

var builder = WebApplication.CreateBuilder(args);

string dbType = builder.Configuration.GetConnectionString("DatabaseType");
string connStr = builder.Configuration.GetConnectionString("MoongladeDatabase");

var cultures = new[] { "en-US", "de-DE" }.Select(p => new CultureInfo(p)).ToList();

WriteParameterTable();
AnsiConsole.MarkupLine("[link=https://github.com/saigkill/Moonglade]GitHub: saigkill/Moonglade[/]");

ConfigureConfiguration();
ConfigureServices(builder.Services);

var app = builder.Build();

await FirstRun();

ConfigureMiddleware();

app.Run();

void WriteParameterTable()
{
    var appVersion = Helper.AppVersion;
    var table = new Table
    {
        Title = new($"Moonglade.Web {appVersion} | .NET {Environment.Version}")
    };

    var strHostName = Dns.GetHostName();
    var ipEntry = Dns.GetHostEntry(strHostName);
    var ips = ipEntry.AddressList;

    table.AddColumn("Parameter");
    table.AddColumn("Value");
    table.AddRow(new Markup("[blue]Path[/]"), new Text(Environment.CurrentDirectory));
    table.AddRow(new Markup("[blue]System[/]"), new Text(Helper.TryGetFullOSVersion()));
    table.AddRow(new Markup("[blue]User[/]"), new Text(Environment.UserName));
    table.AddRow(new Markup("[blue]Host[/]"), new Text(Environment.MachineName));
    table.AddRow(new Markup("[blue]IP addresses[/]"), new Rows(ips.Select(p => new Text(p.ToString()))));
    table.AddRow(new Markup("[blue]Database type[/]"), new Text(dbType!));
    table.AddRow(new Markup("[blue]Image storage[/]"), new Text(builder.Configuration["ImageStorage:Provider"]!));
    table.AddRow(new Markup("[blue]Authentication provider[/]"), new Text(builder.Configuration["Authentication:Provider"]!));
    table.AddRow(new Markup("[blue]Editor[/]"), new Text(builder.Configuration["Editor"]!));

    AnsiConsole.Write(table);
}

void ConfigureConfiguration()
{
    builder.Logging.AddAzureWebAppDiagnostics();
    builder.Configuration.AddJsonFile("manifesticons.json", false, true);
}

void ConfigureServices(IServiceCollection services)
{
    AppDomain.CurrentDomain.Load("Moonglade.Core");
    AppDomain.CurrentDomain.Load("Moonglade.FriendLink");
    AppDomain.CurrentDomain.Load("Moonglade.Menus");
    AppDomain.CurrentDomain.Load("Moonglade.Theme");
    AppDomain.CurrentDomain.Load("Moonglade.Configuration");
    AppDomain.CurrentDomain.Load("Moonglade.Data");

    services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies());

    // Fix docker deployments on Azure App Service blows up with Azure AD authentication
    // https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-6.0
    // "Outside of using IIS Integration when hosting out-of-process, Forwarded Headers Middleware isn't enabled by default."
    var knownProxies = builder.Configuration.GetSection("KnownProxies").Get<string[]>();
    builder.Services.Configure<ForwardedHeadersOptions>(options =>
    {
        options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
        options.ForwardLimit = null;
        options.KnownProxies.Clear();
        if (knownProxies != null)
        {
            foreach (var ip in knownProxies)
            {
                options.KnownProxies.Add(IPAddress.Parse(ip));
            }

            AnsiConsole.MarkupLine("Added known proxies [green]({0})[/]: {1}",
                knownProxies.Length,
                System.Text.Json.JsonSerializer.Serialize(knownProxies).EscapeMarkup());
        }
    });

    services.AddOptions()
            .AddHttpContextAccessor()
            .AddRateLimit(builder.Configuration.GetSection("IpRateLimiting"));
    services.AddApplicationInsightsTelemetry();

    services.AddSession(options =>
    {
        options.IdleTimeout = TimeSpan.FromMinutes(20);
        options.Cookie.HttpOnly = true;
    }).AddSessionBasedCaptcha(options => options.FontStyle = FontStyle.Bold);

    //DSGVO
    services.Configure<CookiePolicyOptions>(options =>
    {
        // Sets the display of the Cookie Consent banner (/Pages/Shared/_CookieConsentPartial.cshtml).
        // This lambda determines whether user consent for non-essential cookies is needed for a given request.
        options.CheckConsentNeeded = context => true;
        options.MinimumSameSitePolicy = SameSiteMode.Strict;
    });

    services.AddLocalization(options => options.ResourcesPath = "Resources");
    services.AddControllers(options => options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute()))
            .AddJsonOptions(options => options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()))
            .ConfigureApiBehaviorOptions(ConfigureApiBehavior.BlogApiBehavior);
    services.AddRazorPages()
            .AddDataAnnotationsLocalization(options => options.DataAnnotationLocalizerProvider = (_, factory) => factory.Create(typeof(SharedResource)))
            .AddRazorPagesOptions(options =>
            {
                options.Conventions.AddPageRoute("/Admin/Post", "admin");
                options.Conventions.AuthorizeFolder("/Admin");
                options.Conventions.AuthorizeFolder("/Settings");
            });

    // Fix Chinese character being encoded in HTML output
    services.AddSingleton(Encoder.MoongladeHtmlEncoder);

    services.AddAntiforgery(options =>
    {
        const string csrfName = "CSRF-TOKEN-MOONGLADE";
        options.Cookie.Name = $"X-{csrfName}";
        options.FormFieldName = $"{csrfName}-FORM";
        options.HeaderName = "XSRF-TOKEN";
    }).Configure<RequestLocalizationOptions>(options =>
    {
        options.DefaultRequestCulture = new("en-US");
        options.SupportedCultures = cultures;
        options.SupportedUICultures = cultures;
    }).Configure<RouteOptions>(options =>
    {
        options.LowercaseUrls = true;
        options.LowercaseQueryStrings = true;
        options.AppendTrailingSlash = false;
    });

    services.AddHealthChecks();
    services.AddPingback()
            .AddSyndication()
            .AddNotification()
            .AddBlogCache()
            .AddMetaWeblog<Moonglade.Web.MetaWeblogService>()
            .AddScoped<ValidateCaptcha>()
            .AddScoped<ITimeZoneResolver, BlogTimeZoneResolver>()
            .AddBlogConfig()
            .AddBlogAuthenticaton(builder.Configuration)
            .AddComments(builder.Configuration)
            .AddImageStorage(builder.Configuration, options => options.ContentRootPath = builder.Environment.ContentRootPath)
            .Configure<List<ManifestIcon>>(builder.Configuration.GetSection("ManifestIcons"));

    switch (dbType!.ToLower())
    {
        case "mysql":
            services.AddMySqlStorage(connStr!);
            break;
        case "postgresql":
            services.AddPostgreSqlStorage(connStr!);
            break;
        case "sqlserver":
        default:
            services.AddSqlServerStorage(connStr!);
            break;
    }
}

async Task FirstRun()
{
    try
    {
        var startUpResut = await app.InitStartUp(dbType);
        switch (startUpResut)
        {
            case StartupInitResult.DatabaseConnectionFail:
                app.MapGet("/", () => Results.Problem(
                    detail: "Database connection test failed, please check your connection string and firewall settings, then RESTART Moonglade manually.",
                    statusCode: 500
                    ));
                app.Run();
                return;
            case StartupInitResult.DatabaseSetupFail:
                app.MapGet("/", () => Results.Problem(
                    detail: "Database setup failed, please check error log, then RESTART Moonglade manually.",
                    statusCode: 500
                ));
                app.Run();
                return;
        }
    }
    catch (Exception e)
    {
        app.MapGet("/", _ => throw new("Start up failed: " + e.Message));
        app.Run();
    }
}

void ConfigureMiddleware()
{
    app.UseForwardedHeaders();

    if (!app.Environment.IsProduction())
    {
        app.Logger.LogWarning($"Running in environment: {app.Environment.EnvironmentName}. Application Insights disabled.");

        var tc = app.Services.GetRequiredService<TelemetryConfiguration>();
        tc.DisableTelemetry = true;
        TelemetryDebugWriter.IsTracingDisabled = true;
    }

    app.UseCustomCss(options => options.MaxContentLength = 10240);
    app.UseManifest(options => options.ThemeColor = "#333333");
    app.UseRobotsTxt();

    app.UseOpenSearch(options =>
    {
        options.RequestPath = "/opensearch";
        options.IconFileType = "image/png";
        options.IconFilePath = "/favicon-16x16.png";
    });

    var bc = app.Services.GetRequiredService<IBlogConfig>();

    if (bc.AdvancedSettings.EnableFoaf)
    {
        app.UseMiddleware<FoafMiddleware>();
    }

    if (bc.AdvancedSettings.EnableMetaWeblog)
    {
        app.UseMiddleware<RSDMiddleware>().UseMetaWeblog("/metaweblog");
    }

    app.UseMiddleware<SiteMapMiddleware>()
              .UseMiddleware<PoweredByMiddleware>()
              .UseMiddleware<DNTMiddleware>();

    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseStatusCodePages(ConfigureStatusCodePages.Handler).UseExceptionHandler("/error");
    }

    app.UseHttpsRedirection();
    app.UseRequestLocalization(new RequestLocalizationOptions
    {
        DefaultRequestCulture = new("en-US"),
        SupportedCultures = cultures,
        SupportedUICultures = cultures
    });

    app.UseStaticFiles();
    app.UseSession().UseCaptchaImage(options =>
    {
        options.RequestPath = "/captcha-image";
        options.ImageHeight = 36;
        options.ImageWidth = 100;
    });

    app.UseIpRateLimiting();
    app.UseRouting();
    app.UseAuthentication().UseAuthorization();

    app.UseEndpoints(ConfigureEndpoints.BlogEndpoints);
}