#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic AS base
WORKDIR /app
EXPOSE 80 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-bionic AS build
WORKDIR /src

COPY ["challengeCoodesh.csproj", "./"]
RUN dotnet restore "challengeCoodesh.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "challengeCoodesh.csproj" -c Release -o /app/build

FROM build AS publish

RUN update-ca-certificates
FROM base AS final

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "challengeCoodesh.dll"]
