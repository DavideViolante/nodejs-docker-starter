FROM mhart/alpine-node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]