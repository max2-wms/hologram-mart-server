FROM node
RUN mkdir app
WORKDIR /app/
COPY package.json package.json
RUN npm install && npm update
COPY . .
EXPOSE 63145
CMD NODE_ENV=docker node server