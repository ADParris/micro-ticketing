FROM node:alpine
WORKDIR /home/app
RUN apk update
COPY package.json ./
RUN npm install --only=prod
COPY ./ ./
CMD ["npm","run", "dev"]