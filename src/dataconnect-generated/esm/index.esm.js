import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'hearth',
  location: 'us-east1'
};

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const getHeartRateMeasurementsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHeartRateMeasurementsForUser', inputVars);
}
getHeartRateMeasurementsForUserRef.operationName = 'GetHeartRateMeasurementsForUser';

export function getHeartRateMeasurementsForUser(dcOrVars, vars) {
  return executeQuery(getHeartRateMeasurementsForUserRef(dcOrVars, vars));
}

export const createMeasurementSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMeasurementSession', inputVars);
}
createMeasurementSessionRef.operationName = 'CreateMeasurementSession';

export function createMeasurementSession(dcOrVars, vars) {
  return executeMutation(createMeasurementSessionRef(dcOrVars, vars));
}

export const createHeartRateMeasurementRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateHeartRateMeasurement', inputVars);
}
createHeartRateMeasurementRef.operationName = 'CreateHeartRateMeasurement';

export function createHeartRateMeasurement(dcOrVars, vars) {
  return executeMutation(createHeartRateMeasurementRef(dcOrVars, vars));
}

