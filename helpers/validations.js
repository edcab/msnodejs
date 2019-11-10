function validateHeaders(data){
    
    if (data.hasOwnProperty('x-channel')) {
        const xChannel = data['x-channel']
    } else{
        throw Error(JSON.stringify( {
            "HttpCode": "400",
            "HttpMessage": "X-Channel Not Found",
            "MoreInformation": "El campo X-Channel no se encuentra en los headers de la petición"
          } ));
    }

    if (data.hasOwnProperty('x-companyid')) {
        const xCompanyId = data['x-companyid']
    } else{
        throw Error(JSON.stringify( {
            "HttpCode": "400",
            "HttpMessage": "X-CompanyId Not Found",
            "MoreInformation": "El campo X-CompanyId no se encuentra en los headers de la petición"
          } ));
    }

    if (data.hasOwnProperty('x-identserialnum')) {
        const xIdentSerialNum = data['x-identserialnum']
    } else{
        throw Error(JSON.stringify( {
            "HttpCode": "400",
            "HttpMessage": "X-IdentSerialNum Not Found",
            "MoreInformation": "El campo X-IdentSerialNum no se encuentra en los headers de la petición"
          } ));
    }

    if (data.hasOwnProperty('x-govissueidenttype')) {
        const xChannel = data['x-govissueidenttype']
    } else{
        throw Error(JSON.stringify( {
            "HttpCode": "400",
            "HttpMessage": "X-GovIssueIdentType Not Found",
            "MoreInformation": "El campo X-GovIssueIdentType no se encuentra en los headers de la petición"
          } ));
    }

    if (data.hasOwnProperty('x-rquid')) {
        const xChannel = data['x-rquid']
    } else{
        throw Error(JSON.stringify( {
            "HttpCode": "400",
            "HttpMessage": "X-RqUID Not Found",
            "MoreInformation": "El campo X-RqUID no se encuentra en los headers de la petición"
          } ));
    }
}

module.exports = {validateHeaders};