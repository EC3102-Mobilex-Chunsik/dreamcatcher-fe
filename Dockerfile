FROM node:22

WORKDIR /app

COPY package.json .

RUN apt-get update && apt-get install -y xdg-utils

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
