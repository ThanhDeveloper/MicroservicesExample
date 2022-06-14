using System.Diagnostics;
using AutoMapper;
using Newtonsoft.Json.Linq;
using Project.Core.DTOs.Order;
using Project.Core.Entities;
using Project.Core.Repositories;
using Project.Core.Services;
using Project.Core.UnitOfWorks;

namespace Project.Service.Services
{
    public class OrderService : Service<Order>, IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public OrderService(IGenericRepository<Order> repository, IUnitOfWork unitOfWork, IMapper mapper, IOrderRepository orderRepository) : base(repository, unitOfWork)
        {
            _mapper = mapper;
            _orderRepository = orderRepository;
        }

        public async Task<Order> CreateOrderAsync(OrderCreateDto orderCreateDto)
        {
            Order order = new Order();
            var customerObj = GetDataViaUri($"https://localhost:44301/api/customers/{orderCreateDto.CustomerId}");
            var projectObj = GetDataViaUri($"http://localhost:44302/api/projects/{orderCreateDto.ProjectId}");
            
            order.Phone = customerObj.Value<string?>("phone");
            order.CustomerName = customerObj.Value<string?>("name");
            order.ProductName = projectObj.Value<string?>("title");
            order.Location = projectObj.Value<string?>("location");
            order.Area = projectObj.Value<string?>("area");
            order.Price = projectObj.Value<string?>("price");

            Order ordered = await AddAsync(order);
            return ordered;
        }

        public JToken GetDataViaUri(string uri)
        {
            using var httpClient = new HttpClient();
            var request = new HttpRequestMessage(HttpMethod.Get, uri);
            var response = httpClient.Send(request);
            using var reader = new StreamReader(response.Content.ReadAsStream());
            var responseBody = reader.ReadToEnd();
            var json = JObject.Parse(responseBody);
            var dataObj = json.GetValue("data");
            return dataObj;
        }
    }
}
