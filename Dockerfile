FROM nginx:1.25.4-alpine-slim

WORKDIR /usr/share/nginx/html

COPY ./dist ./

EXPOSE 80