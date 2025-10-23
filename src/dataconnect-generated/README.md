# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetHeartRateMeasurementsForUser*](#getheartratemeasurementsforuser)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreateMeasurementSession*](#createmeasurementsession)
  - [*CreateHeartRateMeasurement*](#createheartratemeasurement)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetHeartRateMeasurementsForUser
You can execute the `GetHeartRateMeasurementsForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getHeartRateMeasurementsForUser(vars: GetHeartRateMeasurementsForUserVariables): QueryPromise<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;

interface GetHeartRateMeasurementsForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHeartRateMeasurementsForUserVariables): QueryRef<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;
}
export const getHeartRateMeasurementsForUserRef: GetHeartRateMeasurementsForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getHeartRateMeasurementsForUser(dc: DataConnect, vars: GetHeartRateMeasurementsForUserVariables): QueryPromise<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;

interface GetHeartRateMeasurementsForUserRef {
  ...
  (dc: DataConnect, vars: GetHeartRateMeasurementsForUserVariables): QueryRef<GetHeartRateMeasurementsForUserData, GetHeartRateMeasurementsForUserVariables>;
}
export const getHeartRateMeasurementsForUserRef: GetHeartRateMeasurementsForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getHeartRateMeasurementsForUserRef:
```typescript
const name = getHeartRateMeasurementsForUserRef.operationName;
console.log(name);
```

### Variables
The `GetHeartRateMeasurementsForUser` query requires an argument of type `GetHeartRateMeasurementsForUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetHeartRateMeasurementsForUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetHeartRateMeasurementsForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetHeartRateMeasurementsForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetHeartRateMeasurementsForUserData {
  heartRateMeasurements: ({
    id: UUIDString;
    value: number;
    measuredAt: TimestampString;
    notes?: string | null;
  } & HeartRateMeasurement_Key)[];
}
```
### Using `GetHeartRateMeasurementsForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getHeartRateMeasurementsForUser, GetHeartRateMeasurementsForUserVariables } from '@dataconnect/generated';

// The `GetHeartRateMeasurementsForUser` query requires an argument of type `GetHeartRateMeasurementsForUserVariables`:
const getHeartRateMeasurementsForUserVars: GetHeartRateMeasurementsForUserVariables = {
  userId: ..., 
};

// Call the `getHeartRateMeasurementsForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getHeartRateMeasurementsForUser(getHeartRateMeasurementsForUserVars);
// Variables can be defined inline as well.
const { data } = await getHeartRateMeasurementsForUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getHeartRateMeasurementsForUser(dataConnect, getHeartRateMeasurementsForUserVars);

console.log(data.heartRateMeasurements);

// Or, you can use the `Promise` API.
getHeartRateMeasurementsForUser(getHeartRateMeasurementsForUserVars).then((response) => {
  const data = response.data;
  console.log(data.heartRateMeasurements);
});
```

### Using `GetHeartRateMeasurementsForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getHeartRateMeasurementsForUserRef, GetHeartRateMeasurementsForUserVariables } from '@dataconnect/generated';

// The `GetHeartRateMeasurementsForUser` query requires an argument of type `GetHeartRateMeasurementsForUserVariables`:
const getHeartRateMeasurementsForUserVars: GetHeartRateMeasurementsForUserVariables = {
  userId: ..., 
};

// Call the `getHeartRateMeasurementsForUserRef()` function to get a reference to the query.
const ref = getHeartRateMeasurementsForUserRef(getHeartRateMeasurementsForUserVars);
// Variables can be defined inline as well.
const ref = getHeartRateMeasurementsForUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getHeartRateMeasurementsForUserRef(dataConnect, getHeartRateMeasurementsForUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.heartRateMeasurements);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.heartRateMeasurements);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  createdAt: TimestampString;
  email?: string | null;
  gender?: string | null;
  dateOfBirth?: DateString | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  createdAt: ..., 
  email: ..., // optional
  gender: ..., // optional
  dateOfBirth: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., createdAt: ..., email: ..., gender: ..., dateOfBirth: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  createdAt: ..., 
  email: ..., // optional
  gender: ..., // optional
  dateOfBirth: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., createdAt: ..., email: ..., gender: ..., dateOfBirth: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateMeasurementSession
You can execute the `CreateMeasurementSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMeasurementSession(vars: CreateMeasurementSessionVariables): MutationPromise<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;

interface CreateMeasurementSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMeasurementSessionVariables): MutationRef<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;
}
export const createMeasurementSessionRef: CreateMeasurementSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMeasurementSession(dc: DataConnect, vars: CreateMeasurementSessionVariables): MutationPromise<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;

interface CreateMeasurementSessionRef {
  ...
  (dc: DataConnect, vars: CreateMeasurementSessionVariables): MutationRef<CreateMeasurementSessionData, CreateMeasurementSessionVariables>;
}
export const createMeasurementSessionRef: CreateMeasurementSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMeasurementSessionRef:
```typescript
const name = createMeasurementSessionRef.operationName;
console.log(name);
```

### Variables
The `CreateMeasurementSession` mutation requires an argument of type `CreateMeasurementSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMeasurementSessionVariables {
  userId: UUIDString;
  startedAt: TimestampString;
  description?: string | null;
  endedAt?: TimestampString | null;
}
```
### Return Type
Recall that executing the `CreateMeasurementSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMeasurementSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMeasurementSessionData {
  measurementSession_insert: MeasurementSession_Key;
}
```
### Using `CreateMeasurementSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMeasurementSession, CreateMeasurementSessionVariables } from '@dataconnect/generated';

// The `CreateMeasurementSession` mutation requires an argument of type `CreateMeasurementSessionVariables`:
const createMeasurementSessionVars: CreateMeasurementSessionVariables = {
  userId: ..., 
  startedAt: ..., 
  description: ..., // optional
  endedAt: ..., // optional
};

// Call the `createMeasurementSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMeasurementSession(createMeasurementSessionVars);
// Variables can be defined inline as well.
const { data } = await createMeasurementSession({ userId: ..., startedAt: ..., description: ..., endedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMeasurementSession(dataConnect, createMeasurementSessionVars);

console.log(data.measurementSession_insert);

// Or, you can use the `Promise` API.
createMeasurementSession(createMeasurementSessionVars).then((response) => {
  const data = response.data;
  console.log(data.measurementSession_insert);
});
```

### Using `CreateMeasurementSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMeasurementSessionRef, CreateMeasurementSessionVariables } from '@dataconnect/generated';

// The `CreateMeasurementSession` mutation requires an argument of type `CreateMeasurementSessionVariables`:
const createMeasurementSessionVars: CreateMeasurementSessionVariables = {
  userId: ..., 
  startedAt: ..., 
  description: ..., // optional
  endedAt: ..., // optional
};

// Call the `createMeasurementSessionRef()` function to get a reference to the mutation.
const ref = createMeasurementSessionRef(createMeasurementSessionVars);
// Variables can be defined inline as well.
const ref = createMeasurementSessionRef({ userId: ..., startedAt: ..., description: ..., endedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMeasurementSessionRef(dataConnect, createMeasurementSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.measurementSession_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.measurementSession_insert);
});
```

## CreateHeartRateMeasurement
You can execute the `CreateHeartRateMeasurement` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createHeartRateMeasurement(vars: CreateHeartRateMeasurementVariables): MutationPromise<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;

interface CreateHeartRateMeasurementRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHeartRateMeasurementVariables): MutationRef<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
}
export const createHeartRateMeasurementRef: CreateHeartRateMeasurementRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createHeartRateMeasurement(dc: DataConnect, vars: CreateHeartRateMeasurementVariables): MutationPromise<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;

interface CreateHeartRateMeasurementRef {
  ...
  (dc: DataConnect, vars: CreateHeartRateMeasurementVariables): MutationRef<CreateHeartRateMeasurementData, CreateHeartRateMeasurementVariables>;
}
export const createHeartRateMeasurementRef: CreateHeartRateMeasurementRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createHeartRateMeasurementRef:
```typescript
const name = createHeartRateMeasurementRef.operationName;
console.log(name);
```

### Variables
The `CreateHeartRateMeasurement` mutation requires an argument of type `CreateHeartRateMeasurementVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateHeartRateMeasurementVariables {
  userId: UUIDString;
  value: number;
  measuredAt: TimestampString;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateHeartRateMeasurement` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateHeartRateMeasurementData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateHeartRateMeasurementData {
  heartRateMeasurement_insert: HeartRateMeasurement_Key;
}
```
### Using `CreateHeartRateMeasurement`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createHeartRateMeasurement, CreateHeartRateMeasurementVariables } from '@dataconnect/generated';

// The `CreateHeartRateMeasurement` mutation requires an argument of type `CreateHeartRateMeasurementVariables`:
const createHeartRateMeasurementVars: CreateHeartRateMeasurementVariables = {
  userId: ..., 
  value: ..., 
  measuredAt: ..., 
  notes: ..., // optional
};

// Call the `createHeartRateMeasurement()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createHeartRateMeasurement(createHeartRateMeasurementVars);
// Variables can be defined inline as well.
const { data } = await createHeartRateMeasurement({ userId: ..., value: ..., measuredAt: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createHeartRateMeasurement(dataConnect, createHeartRateMeasurementVars);

console.log(data.heartRateMeasurement_insert);

// Or, you can use the `Promise` API.
createHeartRateMeasurement(createHeartRateMeasurementVars).then((response) => {
  const data = response.data;
  console.log(data.heartRateMeasurement_insert);
});
```

### Using `CreateHeartRateMeasurement`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createHeartRateMeasurementRef, CreateHeartRateMeasurementVariables } from '@dataconnect/generated';

// The `CreateHeartRateMeasurement` mutation requires an argument of type `CreateHeartRateMeasurementVariables`:
const createHeartRateMeasurementVars: CreateHeartRateMeasurementVariables = {
  userId: ..., 
  value: ..., 
  measuredAt: ..., 
  notes: ..., // optional
};

// Call the `createHeartRateMeasurementRef()` function to get a reference to the mutation.
const ref = createHeartRateMeasurementRef(createHeartRateMeasurementVars);
// Variables can be defined inline as well.
const ref = createHeartRateMeasurementRef({ userId: ..., value: ..., measuredAt: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createHeartRateMeasurementRef(dataConnect, createHeartRateMeasurementVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.heartRateMeasurement_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.heartRateMeasurement_insert);
});
```

