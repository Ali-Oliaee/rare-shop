FROM node:16-alpine

WORKDIR /frontend

COPY ./package.json /frontend

RUN yarn

COPY . .

CMD [ "yarn", "start" ]
