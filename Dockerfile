FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "pm2-runtime", "dist/server.js" ]
