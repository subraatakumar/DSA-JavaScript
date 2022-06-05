
## 1) Action (pure object)

Actions are plain javascript that says what to do. It has a type field and an optional payload field. Actions are used to explain what to do, but they don't tell us how to do.

## 1.1) Action Creator (Pure function)

This is a pure function which creates an action. It is reusable, portable and easy to test.

## 2) Reducer

Reducers are the functions that take the current state and an action as argument and returns a new state as result.

```js
  const initialState = 0;
  
  const changeTheNumber = (state= initialState, action) => {
    switch(action.type){
      case "INCREMENT": return state + action.payload
      
      case "DECREMENT": return state - action.payload
      
      default: return state
      
    }
  }
```

