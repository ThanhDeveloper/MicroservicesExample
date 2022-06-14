using Project.Core.DTOs.Order;
using Project.Core.Entities;

namespace Project.Core.Services
{
    public interface IOrderService : IGenericService<Order>
    {
        Task<Order> CreateOrderAsync(OrderCreateDto orderCreateDto);
    }
}
