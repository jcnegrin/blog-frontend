### STAGE 1: Build ###
FROM node:12.2.0-alpine as buildContainer

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json /usr/src/app/
RUN npm install
RUN npm config set unsafe-perm true
RUN npm install -g @angular/cli

# add app
COPY . /usr/src/app

# generate build
RUN ng build --prod

### STAGE 2: Release ###
FROM nginx:alpine as release

# Copy dependency definitions
RUN rm -rf /usr/share/nginx/html/*
COPY --from=buildContainer /usr/src/app/dist/simple-blog /usr/share/nginx/html/

# start app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
