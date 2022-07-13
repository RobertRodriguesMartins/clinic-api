const models = require('../models');
const patientService = {
  /**
   * @type {Promise<Array>}
   */
  findAll: async (options) => {
    const possibleOptions = ['surgeries', 'plans'];
    if (possibleOptions.includes(options)) {
      const partialData = await models.patient.findAll({
        include: [{ association: `${options}` }],
      });
      return partialData;
    }
    const data = await models.patient.findAll();
    return data;
  },
};

module.exports = patientService;
