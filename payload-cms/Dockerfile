FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
# Bundle app source
COPY . /app

RUN yarn install

CMD [ "yarn", "dev" ]
EXPOSE 3000