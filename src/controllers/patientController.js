const patientService = require('../services');

/**
 * @type {Record<string, import('express').RequestHandler}
 */
const patientController = {
  findAll: async (req, res, next) => {
    const data = await patientService.findAll();

    return res.status(200).json(data);
  },
};

module.exports = patientController;
