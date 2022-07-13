const patientService = require('../services');

/**
 * @type {Record<string, import('express').RequestHandler}
 */
const patientController = {
  findAll: async (req, res, next) => {
    const { q } = req.query;
    const data = await patientService.findAll(q);

    return res.status(200).json(data);
  },
};

module.exports = patientController;
