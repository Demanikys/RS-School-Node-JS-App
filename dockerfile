FROM node:14.17-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4000:4000
CMD ["npm", "run", "dev" ]