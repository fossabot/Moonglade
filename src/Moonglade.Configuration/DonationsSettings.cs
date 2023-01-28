using System.ComponentModel.DataAnnotations;

namespace Moonglade.Configuration
{
    public class DonationsSettings : IBlogSettings
    {
        /// <summary>
        /// Gets or sets the buy me a coffee.
        /// </summary>
        /// <value>
        /// The buy me a coffee.
        /// </value>
        [Display(Name = "BuyMeACoffe Link")]
        public string BuyMeACoffee { get; set; }

        /// <summary>
        /// Gets or sets the amazon wishlist.
        /// </summary>
        /// <value>
        /// The amazon wishlist.
        /// </value>
        [Display(Name = "Amazon Wishlist Link")]
        public string AmazonWishlist { get; set; }

        /// <summary>
        /// Gets or sets the Paypal.me link.
        /// </summary>
        /// <value>
        /// The Paypal.me link.
        /// </value>
        [Display(Name = "Paypal.me Link")]
        public string Paypal { get; set; }

        /// <summary>
        /// Gets or sets the Patreon profile page.
        /// </summary>
        /// <value>
        /// The Patreon profile page.
        /// </value>
        [Display(Name = "Patreon Link")]
        public string Patreon { get; set; }

        /// <summary>
        /// Gets or sets the Liberapay profile page.
        /// </summary>
        /// <value>
        /// The Liberapay profile page.
        /// </value>
        [Display(Name = "Liberapay Link")]
        public string Liberapay { get; set; }
    }
}
