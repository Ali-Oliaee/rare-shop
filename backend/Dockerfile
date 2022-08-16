FROM node:16-alpine

WORKDIR /server

COPY ./package.json /server

RUN yarn 

COPY . .

CMD [ "node", "server.js" ]
