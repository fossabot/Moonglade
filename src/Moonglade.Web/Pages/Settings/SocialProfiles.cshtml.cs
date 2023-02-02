using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Moonglade.Web.Pages.Settings
{
    public class SocialProfilesModel : PageModel
    {
        private readonly IBlogConfig _blogConfig;
        public SocialProfileSettings ViewModel { get; set; }

        public SocialProfilesModel(IBlogConfig blogConfig)
        {
            _blogConfig = blogConfig;
        }
        public void OnGet()
        {
            ViewModel = _blogConfig.SocialProfileSettings;
        }
    }
}
