using System.ComponentModel.DataAnnotations;

namespace Moonglade.Data.Entities
{
    /// <summary>
    /// Publication Model.
    /// </summary>
    public class PublicationsEntity
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        [Required]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name of the publication.
        /// </summary>
        /// <value>
        /// The name of the publication.
        /// </value>
        [Required]
        public string PublicationName { get; set; }

        /// <summary>
        /// Gets or sets the publisher.
        /// </summary>
        /// <value>
        /// The publisher.
        /// </value>
        [Required]
        public string Publisher { get; set; }

        /// <summary>
        /// Gets or sets the date published.
        /// </summary>
        /// <value>
        /// The date published.
        /// </value>
        [Required]
        public DateTime DatePublished { get; set; }

        /// <summary>
        /// Gets or sets the authors.
        /// </summary>
        /// <value>
        /// The authors.
        /// </value>
        [Required]
        public string Authors { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is book.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this instance is book; otherwise, <c>false</c>.
        /// </value>
        [Required]
        public bool IsBook { get; set; }

        /// <summary>
        /// Gets or sets the title.
        /// </summary>
        /// <value>
        /// The title.
        /// </value>
        [Required]
        public string Title { get; set; }

        /// <summary>
        /// Gets or sets the link.
        /// </summary>
        /// <value>
        /// The link.
        /// </value>
        public string Link { get; set; }

        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        public string Identifier { get; set; }

        /// <summary>
        /// Gets or sets the language.
        /// </summary>
        /// <value>
        /// The language.
        /// </value>
        [Required]
        public string ContentLanguageCode { get; set; }
    }
}
