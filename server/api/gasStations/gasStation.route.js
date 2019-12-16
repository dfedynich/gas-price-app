'use strict';

const controller = require('./gasStation.controller');

module.exports = Router => {
    const router = new Router({
        prefix: `/gas-stations`,
    });

    router.get('/lat/:latitude/long/:longitude', controller.getAll);

    return router;
};