# Redux Toolkit With Example

### redux/store.js

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}
});
```

Till now we have not connected any reducer to our store. Let us connect store to redux app root so that we can access it through out the app.

```js
import "./styles.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Home from "./Home";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Home />
      </div>
    </Provider>
  );
}
```

Now letus create actions and reducer

### redux/slices/counterSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

Now let us connect reducer to store

### redux/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counterReducer
  }
});
```

Our default export in `counterSlice.js` is `export default counterSlice.reducer;` but we imported in a new name `counterReducer`. This name can be any name.

Now dispatch the actions from the component where you want to use it. In this example it is home component.

```js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/slices/counterSlice";

export default function () {
  const value = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Home Function Component</h3>
      <p>Value: {value}</p>
      <div>
        <button onClick={() => dispatch(increment(1))}>Add</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement(1))}>Sub</button>
      </div>
    </>
  );
}
```

The counterSlice can also be imported directly and use it's actions as below.

```js
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "./redux/slices/counterSlice";

export default function () {
  const value = useSelector((state) => state.counterReducer.value);
  const name = useSelector((state) => state.counterReducer.name);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Home Function Component</h3>
      <p>
        Value: {value} {name}
      </p>
      <div>
        <button onClick={() => dispatch(counterSlice.actions.increment(1))}>
          Add
        </button>
        <button onClick={() => dispatch(counterSlice.actions.reset())}>
          Reset
        </button>
        <button onClick={() => dispatch(counterSlice.actions.decrement(1))}>
          Sub
        </button>
      </div>
    </>
  );
}
```

## Summary 

- import createSlice from `@reduxjs/toolkit` and create a slice. createSlice accepts a single configuration object parameter, with the following options:
```js
function createSlice({
    // A name, used in action types
    name: string,
    // The initial state for the reducer
    initialState: any,
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the keys should be other
    // action types
    extraReducers?:
    | Object<string, ReducerFunction>
    | ((builder: ActionReducerMapBuilder<State>) => void)
})
```
Note: In our example we are assigning an addition object of case reducers to reducers.

- Export reducer and actions from slice
- import configureStore from `@reduxjs/toolkit` and reducer from slice file.
- configureStore accepts a single configuration object parameter, with the following options:

```js
  reducer:{reducer1, reducer2} // A single reducer function that will be used as the root reducer,
  middleware?: // An array of Redux middleware to install. If not supplied, defaults to the set of middleware returned by `getDefaultMiddleware()`.
  devTools?: // Whether to enable Redux DevTools integration. Defaults to `true`.
```
- import `useSelector` and `useDispatch` hooks from `react-redux`
- import actions from the slice file
- dispatch actions as required
