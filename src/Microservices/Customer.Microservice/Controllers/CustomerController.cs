using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Product.Microservice.Controllers
{
    [ApiController]
    [Route("api/customers")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            return "Customer response!";
        }
    }
}
