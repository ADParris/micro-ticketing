FROM node:alpine
WORKDIR /home/app
RUN apk update && apk add yarn
COPY package.json ./
RUN yarn
COPY ./ ./
CMD ["yarn", "start"]