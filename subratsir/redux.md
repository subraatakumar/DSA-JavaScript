
## 1) Action (pure object)

Actions are plain javascript objects that says what to do. It has a type field and an optional payload field. Actions are used to explain what to do, but they don't tell us how to do.

```js
  {
      type: "INCREMENT",
      payload: num
  }
```

```js
  {
      type: "DECREMENT",
      payload: num
  }
```

## 1.1) Action Creator (Pure function)

This is a pure function which returns an action. It is reusable, portable and easy to test.

```js
  export const incNumber = (num) => {
    return {
      type: "INCREMENT",
      payload: num
    }
  }
  
  export const decNumber = (num) => {
    return {
      type: "DECREMENT",
      payload: num
    }
  }
```

## 2) Reducer

Reducers are the functions that take the current state and an action as argument and returns a new state as result.

```js
const initialState = 0;
const incDecNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    default:
      return state;
  }
};
export default incDecNumber;
```

You should combine all your reducers into a single.

```js
import { combineReducers } from "redux";
import incDecNumber from "./reducer1";
const rootReducer = combineReducers({ incDecNumber });
export default rootReducer;
```

## 3) Store

The redux store combines together state, action and reducers. We can have a single store in a redux appliation. Redux store has a single root reducer function. 

```js
import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;
```

## 4) Provider

use provider to pass store as prop to complete app.

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.subscribe(() => {});

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

## Use in Component

```js
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./redux/action";

export default function App() {
  const number = useSelector((state) => state.incDecNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <button onClick={() => dispatch(incNumber(1))}>+</button>
      <span>{number}</span>
      <button onClick={() => dispatch(decNumber(1))}>-</button>
    </div>
  );
}

```


# REDUX PRINCIPLES

- Single Source of Truth : The global state of our application is stored as an object inside a single store.
- State is readonly : The only way to change the state is to dispatch an action.
- Immutability, one-way data flow, predictability of outcome.
- Changes are made with pure reducer functions.

