using System.ComponentModel.DataAnnotations;

namespace Moonglade.Configuration
{
    /// <summary>
    /// Settings for Syncfusion components.
    /// </summary>
    /// <seealso cref="Moonglade.Configuration.IBlogSettings" />
    public class SyncfusionSettings : IBlogSettings
    {
        /// <summary>
        /// Gets or sets the license key.
        /// </summary>
        /// <value>
        /// The license key.
        /// </value>
        [Display(Name = "Syncfusions Licensekey")]
        public string LicenseKey { get; set; }

        /// <summary>
        /// Gets or sets the used version.
        /// </summary>
        /// <value>
        /// The used version.
        /// </value>
        [Display(Name = "Current used Syncfusion Version")]
        public string Version { get; set; }
    }
}
