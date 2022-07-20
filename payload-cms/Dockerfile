FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
# Bundle app source
COPY . /app

RUN apk add --no-cache git openssh
RUN yarn install

CMD [ "yarn", "dev" ]
EXPOSE 3000