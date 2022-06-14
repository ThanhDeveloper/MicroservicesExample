using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.API.Filters;
using Project.Core.DTOs;
using Project.Core.DTOs.Order;
using Project.Core.Entities;
using Project.Core.Services;

namespace Project.API.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : CustomBaseController
    {
        private readonly IMapper _mapper;
        private readonly IOrderService _orderService;

        public OrdersController(IMapper mapper, IOrderService orderService)
        {
            _mapper = mapper;
            _orderService = orderService;
        }
        
        // GET api/customers
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var orders = await _orderService.GetAllAsync();
            var orderDtos = _mapper.Map<List<OrderDto>>(orders.ToList());
            return CreateActionResult(CustomResponseDto<List<OrderDto>>.Success(200, orderDtos));
        }
        
        // POST api/orders
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OrderCreateDto orderCreateDto)
        {
            var ordered = await _orderService.CreateOrderAsync(orderCreateDto);
            var newOrder = _mapper.Map<OrderDto>(ordered);
            return CreateActionResult(CustomResponseDto<OrderDto>.Success(201, newOrder));
        }
    }
}