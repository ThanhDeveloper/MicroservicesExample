using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Product.Microservice.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            return "Product response!";
        }
    }
}
