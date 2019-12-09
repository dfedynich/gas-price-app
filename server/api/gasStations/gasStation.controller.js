'use strict';

const got = require('got');
const { routes: {
    gasStations: gasStationsRoute
} } = require('../../config').orchestration;


exports.getAll = async ctx => {
    const stations = await got(gasStationsRoute.urlTemplate);

    ctx.body = response.body;
};