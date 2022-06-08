using Customer.Domain.Entities;

namespace Customer.Application.Contracts.Persistence;

public interface IConsumersRepository : IAsyncRepository<Consumer>
{
}