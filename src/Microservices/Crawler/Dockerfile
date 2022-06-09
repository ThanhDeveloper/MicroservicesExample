FROM node:16-alpine as production

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5001

CMD ["node", "dist/main"]
