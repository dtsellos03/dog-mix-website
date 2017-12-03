FROM node:6.9.4-alpine
MAINTAINER Demos T
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install
RUN npm run build:prod
EXPOSE 8080
CMD ["npm", "start"]
