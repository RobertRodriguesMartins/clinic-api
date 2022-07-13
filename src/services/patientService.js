const models = require('../models');
const patientService = {
  /**
   * @type {Promise<Array>}
   */
  findAll: async () => {
    const data = await models.patient.findAll({
      include: [{ association: 'plans' }],
    });
    return data;
  },
};

module.exports = patientService;
