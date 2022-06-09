using System.Diagnostics;
using AutoMapper;
using Customer.Application.Contracts.Infrastructure;
using Customer.Infrastructure.ApiResults;
using Microsoft.AspNetCore.Mvc;

namespace Customer.Api.Controllers;

[ApiController]
[Route("api/consumers")]
public class ConsumerController : MastersController
{
    private readonly IConsumerService _consumerService;
    public ConsumerController(IMapper mapper, IConsumerService consumerService)
    {
        Mapper = mapper;
        _consumerService = consumerService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetConsumers()
    {
        var consumers = await _consumerService.GetAll();
        return Ok(ApiResponse<object>.Success(consumers));
    }
}