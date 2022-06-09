using Customer.Application.Contracts.Infrastructure;
using Customer.Application.Contracts.Persistence;
using Customer.Application.Services;
using Customer.Infrastructure.Repositories;

namespace Customer.Api;

public static class NativeInjectorConfig
{
    public static void RegisterCoreServices(this IServiceCollection services)
    {
        services.AddScoped<IConsumerService, ConsumerService>();
    }
}