const chai = require('chai');
const { create } = require('../../../utils/patientSchemas');
const chaiAsPromised = require('chai-as-promised');
const patientService = require('../../../services');
const patientControler = require('../../../controllers');
const sinon = require('sinon');

chai.use(chaiAsPromised);

describe('controllers/patientController', () => {
  const res = {};
  res.status = sinon.stub().resolves(res);
  res.json = sinon.stub().resolves(res);

  beforeEach(sinon.restore);
  describe('create', () => {
    it('should reject if joi rejects', async () => {
      sinon.stub(patientService, 'create').resolves();
      sinon.stub(create, 'validateAsync').rejects();
      await chai.expect(patientControler.create({}, res)).to.eventually.be
        .rejected;
    });
  });
});
