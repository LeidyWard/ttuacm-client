# TODO: Builder Pattern with Node 10 -> nginx
FROM node:10.6.0-alpine as builder

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn
RUN yarn build

FROM nginx:1.15-alpine
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

