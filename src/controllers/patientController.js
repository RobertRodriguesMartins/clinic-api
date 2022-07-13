const patientService = require('../services');
const joiValidate = require('../utils');

/**
 * @type {Record<string, import('express').RequestHandler}
 */
const patientController = {
  findAll: async (req, res, next) => {
    const { q } = req.query;
    const data = await patientService.findAll(q);

    return res.status(200).json(data);
  },
  findAllByPlanId: async (req, res, next) => {
    const planId = await joiValidate('byPlan', { ...req.params });
    const data = await patientService.findAllByPlanId(Number(planId));

    return res.status(200).json(data);
  },
  create: async (req, res, next) => {
    /**
     * @type {{fullName: string, planId: number}}
     *
     */
    const patient = await joiValidate('create', { ...req.body });
    const data = await patientService.create(patient);

    return res.status(200).json(data);
  },
};

module.exports = patientController;
