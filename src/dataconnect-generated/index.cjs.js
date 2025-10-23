const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'hearth',
  location: 'us-east1'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const getHeartRateMeasurementsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHeartRateMeasurementsForUser', inputVars);
}
getHeartRateMeasurementsForUserRef.operationName = 'GetHeartRateMeasurementsForUser';
exports.getHeartRateMeasurementsForUserRef = getHeartRateMeasurementsForUserRef;

exports.getHeartRateMeasurementsForUser = function getHeartRateMeasurementsForUser(dcOrVars, vars) {
  return executeQuery(getHeartRateMeasurementsForUserRef(dcOrVars, vars));
};

const createMeasurementSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMeasurementSession', inputVars);
}
createMeasurementSessionRef.operationName = 'CreateMeasurementSession';
exports.createMeasurementSessionRef = createMeasurementSessionRef;

exports.createMeasurementSession = function createMeasurementSession(dcOrVars, vars) {
  return executeMutation(createMeasurementSessionRef(dcOrVars, vars));
};

const createHeartRateMeasurementRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateHeartRateMeasurement', inputVars);
}
createHeartRateMeasurementRef.operationName = 'CreateHeartRateMeasurement';
exports.createHeartRateMeasurementRef = createHeartRateMeasurementRef;

exports.createHeartRateMeasurement = function createHeartRateMeasurement(dcOrVars, vars) {
  return executeMutation(createHeartRateMeasurementRef(dcOrVars, vars));
};
