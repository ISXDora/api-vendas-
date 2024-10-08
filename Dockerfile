FROM node:19-alpine3.18
WORKDIR /app
COPY package* .
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "dev" ]
