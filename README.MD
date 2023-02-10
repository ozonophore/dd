# An external project

##How run it?


Should install docker (https://docs.docker.com/get-docker/)

```
docker-compose up -d
```

then you will be able to open\
UI: http://localhost \
API: http://localhost/rest \
SWAGGER: http://localhost/rest/api-docs

Example requests:\
[FUNNELS](back/src/http/funnel.http) \
[SUBIDS](back/src/http/subid.http)

## Ro run back

Cmd
```
NODE_ENV=production node dist/server.js
```