using Microsoft.EntityFrameworkCore;
using GovLaw.Backend.Models;

namespace GovLaw.Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        
        public DbSet<LawAct> Laws { get; set; }
    }
}
