import { ClsDefaultHeadersModel } from '../controller/model/ClsDefaultHeadersModel';


function extractHeaders(headers) {
  const clsDefaultHeadersModelObject = new ClsDefaultHeadersModel;
  if (Object.prototype.hasOwnProperty.call(headers, 'x-channel')) clsDefaultHeadersModelObject.channel = (headers['x-channel']);
  if (Object.prototype.hasOwnProperty.call(headers, 'x-companyid')) clsDefaultHeadersModelObject.companyId = (headers['x-companyid']);
  if (Object.prototype.hasOwnProperty.call(headers, 'x-govissueidenttype')) clsDefaultHeadersModelObject.govIssueIdentType = (headers['x-govissueidenttype']);
  if (Object.prototype.hasOwnProperty.call(headers, 'x-identserialnum')) clsDefaultHeadersModelObject.identSerialNum = (headers['x-identserialnum']);
  if (Object.prototype.hasOwnProperty.call(headers, 'x-rquid')) clsDefaultHeadersModelObject.rquid = (headers['x-rquid']);
  if (Object.prototype.hasOwnProperty.call(headers, 'x-legalname')) clsDefaultHeadersModelObject.legalName = (headers['x-legalname']);
  if (Object.prototype.hasOwnProperty.call(headers, 'x-ipaddr')) clsDefaultHeadersModelObject.ipAddr = (headers['x-ipaddr']);

  return clsDefaultHeadersModelObject;
}

module.exports = { extractHeaders };
