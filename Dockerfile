# TODO: Builder Pattern with Node 10 -> nginx
FROM node:10.6.0-alpine as builder

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn
RUN yarn build

FROM nginx:1.15-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

