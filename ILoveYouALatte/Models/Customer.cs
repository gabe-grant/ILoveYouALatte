using System.ComponentModel.DataAnnotations;

namespace ILoveYouALatte.Models
{
    public class Customer
    {
        public int Id { get; set; }

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string CustFirebaseId { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string CustFirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string CustLastName { get; set; }

        [Required]
        [MaxLength(255)]
        public string CustEmail { get; set; }

        public int UserTypeId { get; set; }
    }
}
