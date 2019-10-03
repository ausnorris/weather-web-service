FROM node:9

RUN mkdir /src

WORKDIR /src

## Install packages using NPM 5 (bundled with the node:9 image)
COPY ./package.json /src/package.json
#COPY ./package-lock.json /src/package-lock.json
RUN npm config delete proxy
RUN npm install

## Add application code
COPY ./src /src/src/
COPY ./public /src/public/
COPY ./templates /src/templates/

## Set environment to "development" by default
ENV NODE_ENV development

## Allows port 3000 to be publicly available
EXPOSE 3000

## The command uses nodemon to run the application
#RUN ["chmod", "+x", "start.sh"]
CMD node ./src/app.js