const secret = new WeakMap();

class ClsDefaultHeadersModel {
  constructor(rquid, companyId, identSerialNum, govIssueIdentType, legalName, ipAddr, channel) {
    secret.set(this, { _rquid: rquid });
    secret.set(this, { _companyId: companyId });
    secret.set(this, { _identSerialNum: identSerialNum });
    secret.set(this, { _govIssueIdentType: govIssueIdentType });
    secret.set(this, { _legalName: legalName });
    secret.set(this, { _ipAddr: ipAddr });
    secret.set(this, { _channel: channel });
  }

  set rquid(newRquid) {
    secret.get(this)._rquid = newRquid;
  }

  set companyId(newCompanyId) {
    secret.get(this)._companyId = newCompanyId;
  }

  set identSerialNum(newIdentSerialNum) {
    secret.get(this)._identSerialNum = newIdentSerialNum;
  }

  set govIssueIdentType(newGovIssueIdentType) {
    secret.get(this)._govIssueIdentType = newGovIssueIdentType;
  }

  set legalName(newLegalName) {
    secret.get(this)._legalName = newLegalName;
  }

  set ipAddr(newIpAddr) {
    secret.get(this)._ipAddr = newIpAddr;
  }

  set channel(newChannel) {
    secret.get(this)._channel = newChannel;
  }

  get rquid() {
    return secret.get(this)._rquid;
  }

  get companyId() {
    return secret.get(this)._companyId;
  }

  get identSerialNum() {
    return secret.get(this)._identSerialNum;
  }

  get govIssueIdentType() {
    return secret.get(this)._govIssueIdentType;
  }

  get legalName() {
    return secret.get(this)._legalName;
  }

  get ipAddr() {
    return secret.get(this)._ipAddr;
  }

  get channel() {
    return secret.get(this)._channel;
  }
}

module.exports = { ClsDefaultHeadersModel };
