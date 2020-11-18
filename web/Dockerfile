FROM node:14.5.0-alpine AS builder

WORKDIR /usr/src/app/web

COPY ./ .

RUN npm install

RUN npm run build

FROM nginx:1.15.2-alpine

COPY --from=builder /usr/src/app/web/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
