import validaciones from '../helpers/validations';

exports.getNicknamesAdministration = (req, res) => {
  console.log('We are in Controller/getNicknamesAdministration');
  validaciones.validateHeaders(req);
  res.send('<form action= "/product" method="POST"><input type = "text" name = "title"> <button type="submit">Add Product</button></form>');
};
