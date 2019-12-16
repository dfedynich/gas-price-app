'use strict';

const Router = require('@koa/router');

const { apiVersion } = require('../config').server;

function applyApiMiddleware(app) {
    const router = new Router({
        prefix: `/api/${apiVersion}`,
    });

    const gasStationsApi = require('./gasStations')(Router);
    router.use(gasStationsApi.routes());

    app.use(router.routes()).use(router.allowedMethods());
}

module.exports = applyApiMiddleware;