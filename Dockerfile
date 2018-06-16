FROM node:9
WORKDIR /myapp

COPY ./myapp/package.json ./
RUN npm install
CMD ["npm", "start"]
