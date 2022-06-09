using Customer.Application.Contracts.Persistence;
using Customer.Application.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Customer.Infrastructure.Persistence;
using Customer.Infrastructure.Repositories;

namespace Customer.Infrastructure
{
	public static class InfrastructureServiceRegistration
	{
		public static IServiceCollection ConfigCoreServices(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddDbContext<ConsumerContext>(options =>
				options.UseNpgsql(configuration.GetConnectionString("CustomerConnectionString")));
			
			services.AddScoped(typeof(IAsyncRepository<>), typeof(BaseRepository<>));                        
			services.AddScoped<IConsumersRepository, ConsumerRepository>();
			
			services.Configure<EmailSettings>(c => configuration.GetSection("EmailSettings"));

			return services;
		}
	}
}

