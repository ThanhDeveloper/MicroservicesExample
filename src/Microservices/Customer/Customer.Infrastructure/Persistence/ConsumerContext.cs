using Microsoft.EntityFrameworkCore;
using Customer.Domain.Common;
using Customer.Domain.Entities;


namespace Customer.Infrastructure.Persistence;

public class ConsumerContext : DbContext
{
    public ConsumerContext(DbContextOptions<ConsumerContext> options) : base(options)
    {
    }

    public DbSet<Consumer> Customers { get; set; }
}