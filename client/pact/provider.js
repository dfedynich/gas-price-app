'use strict';

const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;

const provider = new Pact({
    cors: true,
    consumer: process.env.PACT_CONSUMER,
    provider: process.env.PACT_PROVIDER,
    host: '127.0.0.1',
    port: +process.env.PORT,
    log: path.resolve(__dirname, '../logs', 'pact.log'),
    logLevel: 'debug',
    dir: path.resolve(__dirname, '../pacts'),
    spec: 2,
    pactfileWriteMode: 'update'
});

module.exports = provider;