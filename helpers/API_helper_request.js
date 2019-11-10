import { config } from 'dotenv';

const SETTINGS = config(); // instanciamos nuestras variables de entorno

const request = require('request');

const options = {
  url: SETTINGS.ENDPOINT_ENDPOINT_SIGNMANAGEMENT,
  headers: {
    'Content type': 'application/json',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    console.info(info);
  }
}

request(options, callback);
