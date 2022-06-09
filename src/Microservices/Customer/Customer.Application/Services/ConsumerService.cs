using AutoMapper;
using Customer.Application.Contracts.Infrastructure;
using Customer.Application.Contracts.Persistence;
using Customer.Domain.Entities;

namespace Customer.Application.Services;

public class ConsumerService: BaseService, IConsumerService
{
    private readonly IConsumersRepository _consumerRepository;
    public ConsumerService(IMapper mapper, IConsumersRepository consumerRepository)
    {
        _consumerRepository = consumerRepository;
        Mapper = mapper;
        //UnitOfWork = unitOfWork;
    }
    
    public async Task<List<Consumer>> GetAll()
    {
        return (List<Consumer>) await _consumerRepository.GetAllAsync();
    }
}