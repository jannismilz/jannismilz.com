FROM node:latest

WORKDIR ./

COPY ./package.json ./
RUN npm i -s
COPY . .
RUN npm run build

EXPOSE 3000

CMD npm start
