FROM agileek/ionic-framework
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8100
CMD ["ionic", "serve"]

### Run
#FROM nginx:alpine
##COPY www /usr/share/nginx/html
#COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html
