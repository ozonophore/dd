FROM node:14.14.0-alpine3.12 as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

RUN npm run build

FROM nginx:alpine as build-stage

COPY --from=common-build-stage /app/build/ /usr/share/nginx/static

COPY --from=common-build-stage /app/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]