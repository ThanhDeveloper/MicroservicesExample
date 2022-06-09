using Customer.Infrastructure.Repositories;

namespace Customer.Infrastructure.UnitOfWork;

public interface IUnitOfWork : IDisposable
{
    ConsumerRepository ConsumerRepository { get; }
    Task CompleteAsync();
}