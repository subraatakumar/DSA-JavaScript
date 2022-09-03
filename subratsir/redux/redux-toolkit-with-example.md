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
