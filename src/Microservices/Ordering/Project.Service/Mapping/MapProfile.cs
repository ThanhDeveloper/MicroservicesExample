using AutoMapper;
using Project.Core.DTOs.Order;
using Project.Core.Entities;

namespace Project.Service.Mapping
{
    public class MapProfile : Profile
    {
        public MapProfile() 
        {
            CreateMap<Order, OrderDto>().ReverseMap();
        }
    }
}
