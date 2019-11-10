import express from 'express';

import routers from './routers/nicknames';

import config from './config/config';

const NicknamesRouters = routers;

let _server; // The let statement declares a block scope local variable, optionally initializing it to a value.

const server = {
  start() {
    const app = express();

    config(app);

    // Routes
    app.use(NicknamesRouters);

    // Own Error Handler
    app.use((error, req, res) => {
      const { HttpCode } = JSON.parse(error.message);

      if (HttpCode === '400') {
        const { HttpCode, HttpMessage, MoreInformation } = JSON.parse(error.message);
        res.status(400).json({
          HttpCode,
          HttpMessage,
          MoreInformation,
        }).send;
      }
    });

    _server = app.listen('8117', () => {
      if (process.env.NODE_ENV !== 'test') {
        console.log('Server opened listen on http://localhost:8117');
      }
    });
  },
  close() {
    _server.close();
  },
};

export default server;

if (!module.parent) { // se arranca si este fichero index.js no se importa desde otro fichero
  server.start();
}
