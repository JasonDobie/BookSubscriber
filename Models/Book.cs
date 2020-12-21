using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookSubscriber.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Text { get; set; }

        [Column(TypeName = "decimal(9, 2)")]
        public decimal PurchasePrice { get; set; }
    }
}
