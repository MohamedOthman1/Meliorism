using System.ComponentModel.DataAnnotations;

namespace BackEnd.DTO
{
    public class UserForRegisterDTO
     {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 characters")]
        public string Password { get; set; }          
     
    }
}