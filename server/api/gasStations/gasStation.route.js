'use strict';

const controller = require('./gasStation.controller');

module.exports = Router => {
    const router = new Router({
        prefix: `/gas-stations`,
    });

    router.get('/radius/:latitude/:longitude/:distance/:fuelType/:sortBy', controller.getAll);

    return router;
};