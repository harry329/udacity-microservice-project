FROM agileek/ionic-framework
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npm install bcrypt
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
