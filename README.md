dotnet new tool-manifest
dotnet tool install --local dotnet-ef
dotnet ef --startup-project ../Customer.Api migrations add  init 
dotnet ef --startup-project ../Customer.Api database update  init 