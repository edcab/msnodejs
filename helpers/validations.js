function validateHeaders(data) {
  if (!Object.prototype.hasOwnProperty.call(data.headers, 'x-channel')) {
    throw Error(JSON.stringify({
      HttpCode: '400',
      HttpMessage: 'X-Channel Not Found',
      MoreInformation: 'El campo X-Channel no se encuentra en los headers de la petición',
    }));
  }

  if (!Object.prototype.hasOwnProperty.call(data.headers, 'x-companyid')) {
    throw Error(JSON.stringify({
      HttpCode: '400',
      HttpMessage: 'X-CompanyId Not Found',
      MoreInformation: 'El campo X-CompanyId no se encuentra en los headers de la petición',
    }));
  }

  if (!Object.prototype.hasOwnProperty.call(data.headers, 'x-identserialnum')) {
    throw Error(JSON.stringify({
      HttpCode: '400',
      HttpMessage: 'X-IdentSerialNum Not Found',
      MoreInformation: 'El campo X-IdentSerialNum no se encuentra en los headers de la petición',
    }));
  }

  if (!Object.prototype.hasOwnProperty.call(data.headers, 'x-govissueidenttype')) {
    throw Error(JSON.stringify({
      HttpCode: '400',
      HttpMessage: 'X-GovIssueIdentType Not Found',
      MoreInformation: 'El campo X-GovIssueIdentType no se encuentra en los headers de la petición',
    }));
  }

  if (!Object.prototype.hasOwnProperty.call(data.headers, 'x-rquid')) {
    throw Error(JSON.stringify({
      HttpCode: '400',
      HttpMessage: 'X-RqUID Not Found',
      MoreInformation: 'El campo X-RqUID no se encuentra en los headers de la petición',
    }));
  }
}

module.exports = { validateHeaders };
