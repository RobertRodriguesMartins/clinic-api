const patientSchemas = require('./patientSchemas');
const schemas = {
  ...patientSchemas,
};
const runSchema = async (schemaName, valueToValidate) => {
  const data = await schemas[schemaName].validateAsync(valueToValidate);
  return data;
};

module.exports = runSchema;
