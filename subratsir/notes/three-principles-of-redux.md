# Three principles of Redux

- Single source of truth : The global state of application is stored on a single store. It can be accessed from any part of App.
- State is read only : We can change it only by emiting an action (Action is an javascript object which has type and optional payload. 
  The Action is dispatched.). This ensures that neither the views nor the network callbacks will ever write directly to the state.
  
```js
store.dispatch({
  type: 'ADD_TODO',
  payload: "New Task"
})
```

```js
// The below object is an action
{
  type: 'ADD_TODO',
  payload: "New Task"
}
```

- Changes are made with pure functions called reducers based on action type.

```js
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ]
    default:
      return state
  }
}      
```
