FROM node:18-alpine3.18 AS builder

WORKDIR /app

RUN ["apk", "add" ,"--no-cache","git"]
COPY package.json .npmrc .

RUN npm install

COPY . .

CMD ["npm", "build"]

FROM nginx:1.25.4-alpine-slim

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist ./

EXPOSE 80