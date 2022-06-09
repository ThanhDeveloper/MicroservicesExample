using Customer.Infrastructure.Persistence;
using Customer.Infrastructure.Repositories;

namespace Customer.Infrastructure.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly ConsumerContext _context;
    private ConsumerRepository _consumerRepository;

    public UnitOfWork(ConsumerContext context)
    {
        _context = context;
    }

    public ConsumerRepository ConsumerRepository
    {
        get
        {
            if (_consumerRepository == null)
            {
                _consumerRepository = new ConsumerRepository(_context);
            }

            return _consumerRepository;
        }
    }

    public async Task CompleteAsync()
    {
        await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    private void Dispose(bool disposing)
    {
        if (disposing)
        {
            _context.Dispose();
        }
    }
}