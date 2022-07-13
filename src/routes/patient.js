const router = require('express').Router();
const patientController = require('../controllers');

router
  .get('/', patientController.findAll)
  .get('/:planId', patientController.findAllByPlanId)
  .post('/create', patientController.create);

module.exports = router;
