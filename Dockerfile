FROM node:10.15.1-alpine

WORKDIR /usr/src/app/kala-bali-api

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]

