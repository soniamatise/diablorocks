# Diablo Rocks

> Diablo

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


Use on production with [pm2](http://pm2.keymetrics.io/)

### Run Shit on Digital Ocean
Staging: `pm2 start npm --name "matise2018-staging" -- run start-staging`

Dev: `pm2 start npm --name "matise2018-dev" -- run start-dev`


```
location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
