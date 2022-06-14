using Project.Core.Entities;
using Project.Core.Repositories;

namespace Project.Data.Repositories
{
    public class OrderRepository : GenericRepository<Order>, IOrderRepository
    {
        public OrderRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
