import bodyParser from 'body-parser'; // parse request to json format
import logger from 'morgan'; // logger
import cors from 'cors'; // automaticamente crea cabeceras
import { config } from 'dotenv';

const SETTINGS = config(); // instanciamos nuestras variables de entorno

export default (app) => { // se exporta por defecto la funcion app la cual al importar este fichero entonces sera instanciada por defecto
  app.disable('x-powered-by'); // deshabilita informacion sobre nuestra arquitectura expresJS

  // Configuración de variables de entorno
  app.set('env', SETTINGS.parsed.ENV); // seteamos nuestro entorno de desarrollo

  app.set('config', SETTINGS.parsed);
  app.locals.env = app.get('env');
  app.locals.config = app.get('config');

  if (SETTINGS.parsed.ENV !== 'test') { // habilitamos nuestro logger cuando no estemos en entorno TEST
    app.use(logger('combined'));
  }

  app.use(bodyParser.json()); // va a parsear todos los request a json
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cors()); // nos permite configurar las cabeceras de forma automatica, verbos, origin... asi evitamos tener que gestionar tantas cabeceras que existen dentro de una api rest
};
