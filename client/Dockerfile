FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@8.4.0 && npm install

COPY . .

EXPOSE 3000
