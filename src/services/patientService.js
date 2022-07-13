const models = require('../models');
const patientService = {
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
  findAllByPlanId: async (plan) => {
    const data = await models.patient.findAll({
      where: {
        planId: plan,
      },
      include: [{ association: 'plans' }],
    });
    return data;
  },
  create: async (patient) => {
    const data = await models.patient.create(patient, {
      raw: true,
    });
    return data;
  },
};

module.exports = patientService;
