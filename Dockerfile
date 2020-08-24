FROM node:14-alpine

WORKDIR /app

COPY app.js .
COPY package.json .
COPY yarn.lock .

COPY public/ ./public/

RUN yarn install

EXPOSE 8000

ENTRYPOINT ["node", "app.js"]
