using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookSubscriber.Data;
using BookSubscriber.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookSubscriber.Controllers
{
    [Produces("application/json")]
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SubscriptionController : ControllerBase
    {
        private readonly PersistDbContext _context;
        private ApplicationUser _user;

        public SubscriptionController(PersistDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _user = userManager.Users.FirstOrDefault();
        }

        [HttpGet("getBooks")]
        public async Task<IEnumerable<Book>> GetBooks()
        {
            var exceptionList = _context.Subscriptions
                .Where(s => s.UserId == _user.Id)
                .Select(s => s.Book);

            return await _context.Books.Except(exceptionList)
                .ToListAsync();
        }

        [HttpGet("getSubscriptions")]
        public async Task<IEnumerable<Subscription>> GetSubscriptions()
        {
            List<Subscription> subscriptions = new List<Subscription>();
            subscriptions = await _context.Subscriptions
                .Include(b => b.Book)
                .Where(s => s.UserId == _user.Id).ToListAsync();
            
            return subscriptions;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("subscribe")]
        public async Task<IActionResult> Subscribe(int bookId)
        {
            try
            {
                var subscription = new Subscription
                {
                    BookId = bookId,
                    UserId = _user.Id,
                    SubscriptionDate = DateTime.Now
                };

                _context.Subscriptions.Add(subscription);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
            
            return Ok();
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("unsubscribe")]
        public async Task<IActionResult> Unsubscribe(int subscriptionId)
        {
            try
            {
                var subscription = _context.Subscriptions.Find(subscriptionId);

                _context.Subscriptions.Remove(subscription);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok();
        }

        [HttpPost("addBook")]
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            try
            {
                _context.Books.Add(book);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok();
        }
    }
}
