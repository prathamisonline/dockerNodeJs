FROM node:18
WORKDIR /home/node/app

COPY app /home/node/app

RUN npm install

CMD npm start

EXPOSE 9999