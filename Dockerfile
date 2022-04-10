FROM node:alpine3.15

WORKDIR /app

ENV NODE_ENV production

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
