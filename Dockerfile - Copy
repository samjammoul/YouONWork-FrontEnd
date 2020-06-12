# base image
FROM node:12.18.0-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine as prod-stage
# copy artifact build from the 'build environment'

COPY --from=build-step /app/dist/yowfrontend /usr/shre/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
