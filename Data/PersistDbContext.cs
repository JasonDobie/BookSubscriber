using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookSubscriber.Models;
using Microsoft.EntityFrameworkCore;

namespace BookSubscriber.Data
{
    public class PersistDbContext : DbContext
    {
        public PersistDbContext(DbContextOptions<PersistDbContext> options) : base(options)
        {
        }
        
        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
    }
}
