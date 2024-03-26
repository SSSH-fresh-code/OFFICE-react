FROM nginx:1.25.4-alpine-slim

WORKDIR /usr/share/nginx/html

COPY ./dist ./
COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD [ "nginx", "-s", "reload" ]