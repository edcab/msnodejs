import express from 'express';

const router = express.Router();
const ClsGetNicknamesController = require('../controller/ClsGetNicknamesController');

router.get('/utilityManagement/v1/Administration_Nicknames/Nicknames', ClsGetNicknamesController.getNicknamesAdministration);

module.exports = router;
