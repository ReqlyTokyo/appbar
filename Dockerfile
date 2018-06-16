FROM node:9
WORKDIR /myapp

#RUN npm install --global create-react-app
COPY ./myapp/package.json ./
RUN npm install
CMD ["npm", "start"]
