using Microsoft.AspNetCore.Identity;
using System.ComponentModel;

namespace BookSubscriber.Models
{
    public class ApplicationUser : IdentityUser
    {
        [PersonalData]
        [DisplayName("First Name")]
        public string FirstName { get; set; }

        [PersonalData]
        [DisplayName("Last Name")]
        public string LastName { get; set; }
    }
}
