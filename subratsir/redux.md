
## 1) Action (pure object)

Actions are plain javascript that says what to do. It has a type field and an optional payload field. Actions are used to explain what to do, but they don't tell us how to do.

## 1.1) Action Creator (Pure function)

This is a pure function which creates an action. It is reusable, portable and easy to test.

## 2) Reducer

Reducers are the functions that take the current state and an action as argument and returns a new state as result.

```js
  const initialState = 0;
  
  export const changeTheNumber = (state= initialState, action) => {
    switch(action.type){
      case "INCREMENT": return state + action.payload
      
      case "DECREMENT": return state - action.payload
      
      default: return state
      
    }
  }
```

You should combine all your reducers into a single.

```js
  import { combineReducers } from 'redux';
  import { changeTheNumber } from 'reducer1';
  
  const rootReducer = combineReducers({ changeTheNumber });
  
  export default rootReducer;
```

## 3) Store

The redux store combines together state, action and reducers. We can have a single store in a redux appliation. Redux store has a single root reducer function. 

```js
  import { createStore } from 'redux';
  const store = createStore(rootReducers);
  
```

# REDUX PRINCIPLES

- Single Source of Truth : The global state of our application is stored as an object inside a single store.
- State is readonly : The only way to change the state is to despath an action.
- Immutability, one-way data flow, predictability of outcome.
- Changes are made with pure reducer functions.

