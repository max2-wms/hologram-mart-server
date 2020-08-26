FROM node:latest

LABEL maintainer="Maxime Pierre <max@webmediasolutionz.com>"

RUN apt-get update && apt-get install -y cron \
    && git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt --depth=1

WORKDIR /app/

COPY package.json package.json

RUN npm i && npm update

COPY . .

EXPOSE 63145

CMD ["NODE_ENV=docker", "node server"]