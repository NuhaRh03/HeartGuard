import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateHeartRateMeasurementData {
  heartRateMeasurement_insert: HeartRateMeasurement_Key;
}

export interface CreateHeartRateMeasurementVariables {
  userId: UUIDString;
  value: number;
  measuredAt: TimestampString;
  notes?: string | null;
}

export interface CreateMeasurementSessionData {
  measurementSession_insert: MeasurementSession_Key;
}

export interface CreateMeasurementSessionVariables {
  userId: UUIDString;
  startedAt: TimestampString;
  description?: string | null;
  endedAt?: TimestampString | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  createdAt: TimestampString;
  email?: string | null;
  gender?: string | null;
  dateOfBirth?: DateString | null;
}

export interface GetHeartRateMeasurementsForUserData {
  heartRateMeasurements: ({
    id: UUIDString;
    value: number;
    measuredAt: TimestampString;
    notes?: string | null;
  } & HeartRateMeasurement_Key)[];
}

export interface GetHeartRateMeasurementsForUserVariables {
  userId: UUIDString;
}

export interface HeartRateMeasurement_Key {
  id: UUIDString;
  __typename?: 'HeartRateMeasurement_Key';
}

export interface MeasurementSession_Key {
  id: UUIDString;
  __typename?: 'MeasurementSession_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetHeartRateMeasurementsForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHeartRateMeasurementsForUserVariables): QueryRef<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetHeartRateMeasurementsForUserVariables): QueryRef<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;
  operationName: string;
}
export const getHeartRateMeasurementsForUserRef: GetHeartRateMeasurementsForUserRef;

export function getHeartRateMeasurementsForUser(vars: GetHeartRateMeasurementsForUserVariables): QueryPromise<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;
export function getHeartRateMeasurementsForUser(dc: DataConnect, vars: GetHeartRateMeasurementsForUserVariables): QueryPromise<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;

interface CreateMeasurementSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMeasurementSessionVariables): MutationRef<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMeasurementSessionVariables): MutationRef<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;
  operationName: string;
}
export const createMeasurementSessionRef: CreateMeasurementSessionRef;

export function createMeasurementSession(vars: CreateMeasurementSessionVariables): MutationPromise<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;
export function createMeasurementSession(dc: DataConnect, vars: CreateMeasurementSessionVariables): MutationPromise<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;

interface CreateHeartRateMeasurementRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHeartRateMeasurementVariables): MutationRef<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateHeartRateMeasurementVariables): MutationRef<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
  operationName: string;
}
export const createHeartRateMeasurementRef: CreateHeartRateMeasurementRef;

export function createHeartRateMeasurement(vars: CreateHeartRateMeasurementVariables): MutationPromise<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
export function createHeartRateMeasurement(dc: DataConnect, vars: CreateHeartRateMeasurementVariables): MutationPromise<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;

