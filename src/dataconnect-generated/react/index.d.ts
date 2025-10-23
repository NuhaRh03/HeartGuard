import { CreateUserData, CreateUserVariables, GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables, CreateMeasurementSessionData, CreateMeasurementSessionVariables, CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useGetHeartRateMeasurementsForUser(vars: GetHeartRateMeasurementsForUserVariables, options?: useDataConnectQueryOptions<GetHeartRateMeasurementsForUserData>): UseDataConnectQueryResult<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;
export function useGetHeartRateMeasurementsForUser(dc: DataConnect, vars: GetHeartRateMeasurementsForUserVariables, options?: useDataConnectQueryOptions<GetHeartRateMeasurementsForUserData>): UseDataConnectQueryResult<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;

export function useCreateMeasurementSession(options?: useDataConnectMutationOptions<CreateMeasurementSessionData, FirebaseError, CreateMeasurementSessionVariables>): UseDataConnectMutationResult<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;
export function useCreateMeasurementSession(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMeasurementSessionData, FirebaseError, CreateMeasurementSessionVariables>): UseDataConnectMutationResult<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;

export function useCreateHeartRateMeasurement(options?: useDataConnectMutationOptions<CreateHeartRateMeasurementData, FirebaseError, CreateHeartRateMeasurementVariables>): UseDataConnectMutationResult<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
export function useCreateHeartRateMeasurement(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHeartRateMeasurementData, FirebaseError, CreateHeartRateMeasurementVariables>): UseDataConnectMutationResult<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
