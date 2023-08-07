const express= require('express');

const router = express.Router();
const patientController = require('../../../controllers/patient_controller');
const reportController =require('../../../controllers//report_controller');
const {verifyToken} = require('../../../config/middleware');
const passport = require('passport');


 router.post('/register',verifyToken, patientController.register);

 
 //- /patients/:id/create_report
 router.post('/:id/create_report',verifyToken,reportController.create_report);
 router.get('/:id/all_reports',  reportController.all_reports);


module.exports = router;