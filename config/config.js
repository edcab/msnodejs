import bodyParser from 'body-parser'; // parse request to json format
import logger from 'morgan'; // logger
import cors from 'cors'; // automaticamente crea cabeceras
import { config } from 'dotenv'; // importamos la libreria dotenv pero solo traemos el archivo de configuracion config

const SETTINGS = config(); // instanciamos nuestras variables de entorno, cargamos la configuración guardandola en la variable SETTINGS

export default (app) => { // se exporta por defecto la funcion app la cual al importar este fichero entonces sera instanciada por defecto
  app.disable('x-powered-by'); // deshabilita informacion sobre nuestra arquitectura expresJS

  // Configuración de variables de entorno
  app.set('env', SETTINGS.parsed.ENV); // seteamos nuestro entorno de desarrollo en una variable llamada 'env'

  app.set('config', SETTINGS.parsed); // le decimos a express que guarde en una variable de entorno llamada 'config' toda nuestra configuracion
  app.locals.env = app.get('env'); // podemos decirle que en variables locales guarde cierta informacion
  app.locals.config = app.get('config');

  if (SETTINGS.parsed.ENV !== 'test') { // habilitamos nuestro logger cuando no estemos en entorno TEST
    app.use(logger('combined'));
  }

  app.use(bodyParser.json()); // va a parsear todos los request a json
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cors()); // nos permite configurar las cabeceras de forma automatica, verbos, origin... asi evitamos tener que gestionar tantas cabeceras que existen dentro de una api rest
};
