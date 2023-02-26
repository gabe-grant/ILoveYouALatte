using ILoveYouALatte;
using ILoveYouALatte.Models;
using ILoveYouALatte.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddTransient<ICustomerRepository, CustomerRepository>();
builder.Services.AddTransient<IDrinkOrderRepository, DrinkOrderRepository>();

var firebaseProjectId = builder.Configuration.GetValue<string>("FirebaseProjectId");
var googleTokenUrl = $"https://securetoken.google.com/{firebaseProjectId}";

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = googleTokenUrl;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = googleTokenUrl,
            ValidateAudience = true,
            ValidAudience = firebaseProjectId,
            ValidateLifetime = true
        };
    });

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    // Do not block requests while in development
    app.UseCors(options =>
    {
        options.AllowAnyOrigin();
        options.AllowAnyMethod();
        options.AllowAnyHeader();
    });
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();

/*
    A.NET or .NET Core web application runs inside a host that handles application startup, web server configuration, etc. 
    The host encapsulates resources such as logging, configuration, dependency injection (DI), and any IHostedService implementations. 
    A host is created, configured, and executed using the code written in the Program class.

    To create a host in ASP.NET Core 6, you should call the Build().Run() method on a host builder. 
    A host builder is an instance of IHostBuilder. The following code snippet illustrates this:

        1. var builder = WebApplication.CreateBuilder(args);
        2. var app = builder.Build();
        3. app.Run();

    The WebApplication class implements the following interfaces:

        * IHost – used to start and stop the host
        * IApplicationBuilder – used to build the middleware pipeline
        * IEndpointRouteBuilder – used to add endpoints

    You can also call the CreateDefaultBuilder method to create a host. 
    This method is used to initialize a new instance of the WebHostBuilder class with pre-configured defaults.
    The following code snippet shows how the CreateDefaultBuilder method can be used:
        
        var host = new WebHostBuilder()
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseIISIntegration()
            .UseStartup<Startup>()
            .Build();

    Note that both WebApplication and WebApplicationBuilder classes were introduced in ASP.NET Core 6.

    The ConfigureWebHostDefaults() extension method can be used to configure a web application host by selecting Kestrel as the web server 
    and configuring it using the application’s hosting configuration providers.
*/