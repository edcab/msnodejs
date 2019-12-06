const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const mockedEnv = require('mocked-env');
const path = require('path');
const { app } = require('../index');

const { expect } = chai;
let restore;

chai.use(chaiHttp);

describe('ERROR by absent headers in GET utilityManagement/v1/Administration_Nicknames/Nicknames ', () => {
  beforeEach(() => {
    restore = mockedEnv({
      NODE_ENV: 'test',
    });
  });

  it('works', () => {
    assert(process.env.NODE_ENV === 'test');
  });

  it('ERROR 400 - X-Channel', (done) => {
    chai
      .request(app)
      .get('/utilityManagement/v1/Administration_Nicknames/Nicknames')
      .end((error, res) => {
        expect(res).to.have.status(400);
        expect(process.env.NODE_ENV).eq('test');
        done();
      });
  });

  afterEach(() => {
    // don't forget to restore the old process.env
    restore();
  });
});
