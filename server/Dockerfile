FROM node:lts-alpine

RUN npm install

RUN npm build

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY node_modules /home/node/app/node_modules

COPY /build/ /home/node/app

USER node

EXPOSE 3333

ENV ENV_SILENT=true

ENTRYPOINT ["node","server.js"]
