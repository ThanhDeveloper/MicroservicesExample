using Customer.Domain.Entities;

namespace Customer.Application.Contracts.Infrastructure;

public interface IConsumerService
{
    Task<List<Consumer>> GetAll();
}