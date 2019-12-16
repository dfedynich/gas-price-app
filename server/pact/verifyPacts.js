const { Verifier } = require('@pact-foundation/pact');
const packageJson = require('../package.json');

let opts = {
    providerBaseUrl: 'http://localhost:3000',
    provider: 'gas-station-provider',
    pactBrokerUrl: 'https://deniplane.pact.dius.com.au',
    pactBrokerToken: 'TRViSQ33wWFapMT8x5Xf0A',
    publishVerificationResult: true,
    providerVersion: packageJson.version
};

new Verifier().verifyProvider(opts).then(function () {
    console.log("Pacts successfully verified!");
});