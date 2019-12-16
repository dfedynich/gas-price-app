let publisher = require('@pact-foundation/pact-node');
let path = require('path');

let opts = {
    pactFilesOrDirs: [path.resolve(__dirname, '../pacts')],
    pactBroker: 'https://deniplane.pact.dius.com.au/',
    pactBrokerToken: 'TRViSQ33wWFapMT8x5Xf0A',
    consumerVersion: '2.0.0'
};

publisher.publishPacts(opts).then(() => console.log("Pacts successfully published"));