const router = require('express').Router();
const patientController = require('../controllers');

router.get('/', patientController.findAll);
router.get('/:planId', patientController.findAllByPlanId);

module.exports = router;
