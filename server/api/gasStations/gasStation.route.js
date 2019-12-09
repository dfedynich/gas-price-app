'use strict';

const controller = require('./gasStation.controller');

module.exports = Router => {
    const router = new Router({
        prefix: `/gas-stations`,
    });

    router.get('/all', controller.getAll);

    return router;
};