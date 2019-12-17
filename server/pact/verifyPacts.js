const { Verifier } = require('@pact-foundation/pact');
const packageJson = require('../package.json');

let opts = {
    providerBaseUrl: `${process.env.HOST}:${process.env.PORT}`,
    provider: process.env.PACT_PROVIDER,
    pactBrokerUrl: process.env.PACT_BROKER,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    publishVerificationResult: true,
    providerVersion: packageJson.version
};

new Verifier().verifyProvider(opts).then(function () {
    console.log("Pacts successfully verified!");
});