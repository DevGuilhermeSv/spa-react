#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM node:latest
WORKDIR /app
EXPOSE 3000

COPY . .
ENTRYPOINT [ "npm","start" ]

