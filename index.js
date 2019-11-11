import express from 'express';

import routers from './routers/nicknames';

import config from './config/config';


const NicknamesRouters = routers;

let _server; // The let statement declares a block scope local variable, optionally initializing it to a value.

const server = {
  start() { // method one
    const app = express(); // creacion de servidor
    config(app); // cargamos nuestra configuracion, le enviamos la app que estamos creando

    // Routes
    app.use(NicknamesRouters);

    // Own Error Handler
    // eslint-disable-next-line no-unused-vars
    app.use((error, req, res, next) => {
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

    _server = app.listen(app.locals.config.PORT, () => { // guardamos la instancia de la creacion del servidor
      if (process.env.NODE_ENV !== 'test') {
        console.log(`Server opened listen on http://localhost:${app.locals.config.PORT}`);
      }
    });
  },
  close() { // method two
    _server.close();
  },
};

export default server;

if (!module.parent) { // se arranca si este fichero index.js no se importa desde otro fichero
  server.start();
}
