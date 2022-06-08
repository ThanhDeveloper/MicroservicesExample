using Microsoft.EntityFrameworkCore;
using Customer.Domain.Common;
using Customer.Domain.Entities;


namespace Customer.Infrastructure.Persistence;

public class ConsumerContext : DbContext
{
    public ConsumerContext(DbContextOptions<ConsumerContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.ApplyConfigurationsFromAssembly(typeof(SongEntityTypeConfiguration).Assembly);
    }

    public DbSet<Consumer> Consumers { get; set; }
}