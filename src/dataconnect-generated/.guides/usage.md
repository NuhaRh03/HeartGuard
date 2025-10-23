# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUser, useGetHeartRateMeasurementsForUser, useCreateMeasurementSession, useCreateHeartRateMeasurement } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useGetHeartRateMeasurementsForUser(getHeartRateMeasurementsForUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateMeasurementSession(createMeasurementSessionVars);

const { data, isPending, isSuccess, isError, error } = useCreateHeartRateMeasurement(createHeartRateMeasurementVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, getHeartRateMeasurementsForUser, createMeasurementSession, createHeartRateMeasurement } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation GetHeartRateMeasurementsForUser:  For variables, look at type GetHeartRateMeasurementsForUserVars in ../index.d.ts
const { data } = await GetHeartRateMeasurementsForUser(dataConnect, getHeartRateMeasurementsForUserVars);

// Operation CreateMeasurementSession:  For variables, look at type CreateMeasurementSessionVars in ../index.d.ts
const { data } = await CreateMeasurementSession(dataConnect, createMeasurementSessionVars);

// Operation CreateHeartRateMeasurement:  For variables, look at type CreateHeartRateMeasurementVars in ../index.d.ts
const { data } = await CreateHeartRateMeasurement(dataConnect, createHeartRateMeasurementVars);


```