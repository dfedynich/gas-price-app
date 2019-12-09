'use strict';

const http = require('http');
const app = require('./app');

const { port } = require('./config').server;

async function bootstrap() {
    return http.createServer(app.callback()).listen(port);
}

bootstrap()
    .then(server =>
        console.log(`🚀 Server listening on port ${server.address().port}!`),
    )
    .catch(err => {
        setImmediate(() => {
            console.error('Unable to run the server because of the following error:');
            console.error(err);
            process.exit();
        });
    });