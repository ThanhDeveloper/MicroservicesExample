using AutoMapper;
using Customer.Api.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Customer.Api.Controllers;

[ApiController]
[Route("api/consumers")]
public class ConsumerController : MastersController
{
    private readonly IConfiguration _configuration;
    public ConsumerController(IMapper mapper, IConfiguration configuration)
    {
        _configuration = configuration;
        Mapper = mapper;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetConsumers()
    {
        /*var consumers = await _songService.GetAll();*/
        return Ok(ApiResponse<object>.Success("Consumer response"));
    }
}