import express from 'express';
import { handlerError } from 'response-ifx-module/handler/ErrorHandler';
import routers from './routers/nicknames';
import config from './config/config';

const NicknamesRouters = routers;

const app = express();
config(app);
app.use(NicknamesRouters);

app.use((error, req, res, next) => {
  handlerError(error, req, res, next);
});

app.listen(app.locals.config.PORT);

module.exports = { app };
