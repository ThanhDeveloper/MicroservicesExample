using Customer.Infrastructure.Persistence;
using Customer.Application.Contracts.Persistence;
using Customer.Domain.Entities;

namespace Customer.Infrastructure.Repositories;

public class ConsumerRepository : BaseRepository<Consumer>, IConsumersRepository
{
    public ConsumerRepository(ConsumerContext dbContext) : base(dbContext)
    {
    }
}