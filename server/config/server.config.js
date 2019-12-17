
const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    apiPath: process.env.API_PATH || '/api',
    apiVersion: process.env.API_VERSION || 'v1'
};

module.exports = config;