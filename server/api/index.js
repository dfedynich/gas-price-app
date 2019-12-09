'use strict';

const fs = require('fs');
const path = require('path');
const Router = require('@koa/router');

const { apiVersion } = require('../config').server;
const baseName = path.basename(__filename);

function applyApiMiddleware(app) {
    const router = new Router({
        prefix: `/api/${apiVersion}`,
    });

    // fs.readdirSync(__dirname)
    //     .filter(file => file.indexOf('.') !== 0 && file !== baseName)
    //     .forEach(file => {
    //         console.log(file);
    //         const api = require(path.join(__dirname, file))(Router);
    //         router.use(api.routes());
    //     });

    const gasStationsApi = require('./gasStations')(Router);
    router.use(gasStationsApi.routes());

    app.use(router.routes()).use(router.allowedMethods());
}

module.exports = applyApiMiddleware;