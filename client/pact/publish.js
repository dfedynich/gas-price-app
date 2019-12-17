let publisher = require('@pact-foundation/pact-node');
let path = require('path');

let opts = {
    pactFilesOrDirs: [path.resolve(__dirname, '../pacts')],
    pactBroker: process.env.PACT_BROKER,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: '2.0.0'
};

publisher.publishPacts(opts).then(() => console.log("Pacts successfully published"));