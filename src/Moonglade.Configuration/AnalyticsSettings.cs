using System.ComponentModel.DataAnnotations;

namespace Moonglade.Configuration
{
    /// <summary>
    /// Settings for the Analytics.
    /// </summary>
    /// <seealso cref="Moonglade.Configuration.IBlogSettings" />
    public class AnalyticsSettings : IBlogSettings
    {
        /// <summary>
        /// Gets or sets the google analytics tracker id.
        /// </summary>
        /// <value>
        /// The google analytics tracker id.
        /// </value>
        [Display(Name = "Google Analytics Tracker Id")]
        public string GoogleAnalytics { get; set; }

        /// <summary>
        /// Gets or sets the clarity project identifier.
        /// </summary>
        /// <value>
        /// The clarity project identifier.
        /// </value>
        [Display(Name = "Clarity Project Id")]
        public string ClarityProjectId { get; set; }
    }
}
