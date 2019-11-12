import validaciones from 'response-ifx-module';
import { getNicknames } from '../service/ClsGetNicknamesService';
import { extractHeaders } from '../util/ClsUtils';

exports.getNicknamesAdministration = (req, res) => {
  console.log('We are in Controller/getNicknamesAdministration');
  validaciones.validateHeaders(req);
  getNicknames(extractHeaders(req.headers, req, res));
};
