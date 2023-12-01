FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segundo etapa

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/integracion-continua /usr/share/nginx/html