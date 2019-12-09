
const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    apiVersion: process.env.API_VERSION || 'v1',
    orchestration: {
        routes: {

        }
    }
};

module.exports = config;