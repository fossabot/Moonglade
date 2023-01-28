using System.ComponentModel.DataAnnotations;

namespace Moonglade.Configuration
{
    /// <summary>
    /// Settings for the site verification.
    /// </summary>
    /// <seealso cref="Moonglade.Configuration.IBlogSettings" />
    public class SiteVerificationSettings : IBlogSettings
    {
        /// <summary>
        /// Gets or sets the google site verification code.
        /// </summary>
        /// <value>
        /// The google site verification code.
        /// </value>
        [Display(Name = "Googles Site Verification Code")]
        public string GoogleSiteVerificationCode { get; set; }

        /// <summary>
        /// Gets or sets the bing site verification code.
        /// </summary>
        /// <value>
        /// The bing site verification code.
        /// </value>
        [Display(Name = "Bings Site Verification Code")]
        public string BingSiteVerificationCode { get; set; }

        /// <summary>
        /// Gets or sets the yandex site verification code.
        /// </summary>
        /// <value>
        /// The yandex site verification code.
        /// </value>
        [Display(Name = "Yandex Verification Code")]
        public string YandexSiteVerificationCode { get; set; }

        /// <summary>
        /// Gets or sets the facebook application identifier.
        /// </summary>
        /// <value>
        /// The facebook application identifier.
        /// </value>
        [Display(Name = "Facebook App ID")]
        public string FacebookAppId { get; set; }

        /// <summary>
        /// Gets or sets the norton save web verification code.
        /// </summary>
        /// <value>
        /// The norton save web verification code.
        /// </value>
        [Display(Name = "Norton Save Web Site Verification Code")]
        public string NortonSaveWebVerificationCode { get; set; }

        /// <summary>
        /// Gets or sets the world of trust verification code.
        /// </summary>
        /// <value>
        /// The world of trust verification code.
        /// </value>
        [Display(Name = "World of Trust Verification Code")]
        public string WorldOfTrustVerificationCode { get; set; }
    }
}
