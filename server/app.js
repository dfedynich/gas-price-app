const Koa = require('koa');
const logger = require('koa-logger');
const errorHandler = require('./middleware/error/error.middleware');
const cors = require('@koa/cors');
const applyApiMiddleware = require('./api');

const app = new Koa();

app.use(logger());
app.use(errorHandler);
app.use(cors());

applyApiMiddleware(app);

module.exports = app;