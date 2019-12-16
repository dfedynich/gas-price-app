'use strict';

const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;

const provider = new Pact({
    cors: true,
    consumer: 'gas-station-consumer',
    provider: 'gas-station-provider',
    host: "127.0.0.1",
    port: 3000,
    log: path.resolve(__dirname, '../logs', 'pact.log'),
    logLevel: 'debug',
    dir: path.resolve(__dirname, '../pacts'),
    spec: 2,
    pactfileWriteMode: 'update'
});

module.exports = provider;