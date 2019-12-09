const Koa = require('koa');
const logger = require('koa-logger');
const errorHandler = require('./middleware/error/error.middleware');
const applyApiMiddleware = require('./api');

const app = new Koa();

app.use(logger());
app.use(errorHandler);


applyApiMiddleware(app);

module.exports = app;