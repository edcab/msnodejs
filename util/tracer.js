const { Tracer, ExplicitContext } = require('zipkin');
const { recorder } = require('../util/recorder');

const tracer = new Tracer({
  ctxImpl: new ExplicitContext(),
  recorder,
  localServiceName: 'msnodejs',
});

module.exports = {
  tracer,
};
