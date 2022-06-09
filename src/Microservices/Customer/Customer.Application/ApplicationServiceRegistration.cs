using System.Reflection;
using Customer.Application.Contracts.Infrastructure;
using Customer.Application.Services;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Customer.Application;

public static class ApplicationServiceRegistration
{
    public static void ConfigApplicationCoreServices(this IServiceCollection services)
    {
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
    }
}