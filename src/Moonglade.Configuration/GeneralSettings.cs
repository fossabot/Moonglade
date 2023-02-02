using System.ComponentModel.DataAnnotations;

namespace Moonglade.Configuration;

public class GeneralSettings : IBlogSettings
{
    [Required]
    [Display(Name = "Meta keyword")]
    [MaxLength(1024)]
    public string MetaKeyword { get; set; }

    [Display(Name = "Canonical URL prefix")]
    [DataType(DataType.Url)]
    [MaxLength(64)]
    public string CanonicalPrefix { get; set; }

    [Required]
    [Display(Name = "Logo text")]
    [MaxLength(16)]
    public string LogoText { get; set; }

    [Required]
    [RegularExpression(@"[a-zA-Z0-9\s.\-\[\]]+", ErrorMessage = "Only letters, numbers, - and [] are allowed.")]
    [Display(Name = "Copyright")]
    [MaxLength(64)]
    public string Copyright { get; set; }

    [Required]
    [Display(Name = "Blog title")]
    [MaxLength(16)]
    public string SiteTitle { get; set; }

    [Required]
    [Display(Name = "Your name")]
    [MaxLength(32)]
    public string OwnerName { get; set; }

    [Required]
    [Display(Name = "Owner email")]
    [DataType(DataType.EmailAddress)]
    [MaxLength(64)]
    public string OwnerEmail { get; set; }

    [Required]
    [Display(Name = "Your description")]
    [DataType(DataType.MultilineText)]
    [MaxLength(256)]
    public string Description { get; set; }

    [Required]
    [Display(Name = "Short description")]
    [MaxLength(32)]
    public string ShortDescription { get; set; }

    [Display(Name = "Side bar HTML code")]
    [DataType(DataType.MultilineText)]
    [MaxLength(2048)]
    public string SideBarCustomizedHtmlPitch { get; set; }

    [Display(Name = "Side bar display")]
    public SideBarOption SideBarOption { get; set; }

    [Display(Name = "Footer HTML code")]
    [DataType(DataType.MultilineText)]
    [MaxLength(4096)]
    public string FooterCustomizedHtmlPitch { get; set; }

    public TimeSpan SelectedUtcOffset { get; set; }

    [MaxLength(64)]
    public string TimeZoneId { get; set; }

    [Display(Name = "Auto Light / Dark theme regarding client system settings")]
    public bool AutoDarkLightTheme { get; set; }

    public int ThemeId { get; set; }

    [Display(Name = "Show pride mouse cursor and flag")]
    public bool Pride { get; set; }

    [Display(Name = "Profile")]
    public bool WidgetsProfile { get; set; } = true;

    [Display(Name = "Tags")]
    public bool WidgetsTags { get; set; } = true;

    [Display(Name = "Categories")]
    public bool WidgetsCategoryList { get; set; } = true;

    [Display(Name = "Friend links")]
    public bool WidgetsFriendLink { get; set; } = true;

    [Display(Name = "Subscription buttons")]
    public bool WidgetsSubscriptionButtons { get; set; } = true;

    [Display(Name = "Show Admin login button under sidebar")]
    public bool ShowAdminLoginButton { get; set; }

    [Display(Name = "Bings Site Verification Code")]
    public string BingSiteVerificationCode { get; set; }

    [Display(Name = "Yandex Verification Code")]
    public string YandexSiteVerificationCode { get; set; }

    [Display(Name = "Facebook App ID")]
    public string FacebookAppId { get; set; }

    [Display(Name = "Norton Save Web Site Verification Code")]
    public string NortonSaveWebVerificationCode { get; set; }

    [Display(Name = "World of Trust Verification Code")]
    public string WorldOfTrustVerificationCode { get; set; }

    [Display(Name = "Google Analytics Tracker Id")]
    public string GoogleAnalytics { get; set; }


    [Display(Name = "Clarity Project Id")]
    public string ClarityProjectId { get; set; }

    /// <summary>
    /// Gets or sets the license key.
    /// </summary>
    /// <value>
    /// The license key.
    /// </value>
    [Display(Name = "Syncfusions Licensekey")]
    public string SyncfusionLicenseKey { get; set; }

    /// <summary>
    /// Gets or sets the used version.
    /// </summary>
    /// <value>
    /// The used version.
    /// </value>
    [Display(Name = "Current used Syncfusion Version. If the official Version is 20.4.0.38 use 20.4.38")]
    public string SyncfusionVersion { get; set; }

    [MaxLength(64)]
    public string AvatarUrl { get; set; }

    public TimeSpan TimeZoneUtcOffset { get; set; }

    public GeneralSettings() => ThemeId = 1;
}

public enum SideBarOption
{
    Right = 0,
    Left = 1,
    Disabled = 2
}