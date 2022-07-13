const router = require('express').Router();
const patientController = require('../controllers');

router.get('/', patientController.findAll);

module.exports = router;
