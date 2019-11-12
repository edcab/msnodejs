
function getNicknames(clsDefaultHeadersModel, req, res) {
  console.log(clsDefaultHeadersModel);
  res.send('Hello from service');
}

module.exports = { getNicknames };
