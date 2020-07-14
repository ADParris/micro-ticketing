FROM node:alpine
WORKDIR /home/app
RUN apk update && apk add yarn
COPY package.json ./
RUN yarn install --production
COPY ./ ./
CMD ["yarn", "start"]