1. useState: Used for managing state in functional components
2. useEffect: Used for managing side effects in functional components
3. useContext: Used for consuming a React context
4. useReducer: Used for more complex state management in functional components
5. useCallback: Used for memoizing functions to prevent unnecessary re-renders
6. useMemo: Used for memoizing expensive computations to prevent unnecessary re-computations
7. useRef: Used for accessing and modifying the properties of a mounted component
8. useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations
9. useImperativeHandle: Used for exposing certain methods of a child component to a parent component
10. useDebugValue: Used for displaying custom debugging information in React DevTools


It's important to note that Hooks can only be used in functional components or other custom Hooks, and cannot be used in class components. Additionally, custom Hooks can be created using these built-in Hooks to reuse logic across different components.

## Difference between useEffect and useLayoutEffect

useEffect and useLayoutEffect are two React Hooks that allow you to perform side effects in functional components. The main difference between them is when they run and how they interact with the browser's rendering pipeline.

useEffect runs asynchronously after the browser has painted or rendered the DOM, while useLayoutEffect runs synchronously before the browser paints or renders the DOM. This means that any state changes or updates made inside useLayoutEffect will be applied to the DOM before it is painted or rendered, whereas updates made inside useEffect will be applied after the DOM has been painted or rendered.

Here's an example to illustrate the difference between useEffect and useLayoutEffect:
```js
import React, { useState, useEffect, useLayoutEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect', count);
  }, [count]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect', count);
  }, [count]);

  console.log('render', count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

n this example, we have a count state variable that is incremented when the user clicks the "Increment" button. We're using useEffect and useLayoutEffect to log the current value of count when it changes.

When we run this example, we can see that the order of the console logs is:

```js
render 0
useLayoutEffect 0
useEffect 0
render 1
useLayoutEffect 1
useEffect 1
```

This shows that useLayoutEffect runs synchronously before the DOM is painted or rendered, and useEffect runs asynchronously after the DOM is painted or rendered.

Overall, the main difference between useEffect and useLayoutEffect is their timing and how they interact with the browser's rendering pipeline. In general, you should use useEffect for most side effects and useLayoutEffect only when you need to make updates that affect the layout of the page or interact with other browser APIs that depend on the layout.


## useInprativeHandle

useImperativeHandle is a hook that allows you to customize the instance value that is exposed to parent components when using ref on a child component. It is often used in conjunction with forwardRef, which allows a child component to receive a ref from its parent.

Here's an example to illustrate how to use useImperativeHandle:

```js
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

const Parent = () => {
  const childRef = useRef();

  const handleButtonClick = () => {
    childRef.current.focusInput();
  };

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};
```
In this example, we have a Child component that renders an input element and uses useImperativeHandle to customize the instance value that is exposed to the parent Parent component. We define a function called focusInput that calls the focus method on the input element using a useRef hook to access the DOM node.

The Parent component renders the Child component and a button that calls the focusInput method on the child ref when clicked. This allows the Parent component to trigger a method on the child component without needing to know the details of how the method is implemented.

Overall, useImperativeHandle is a useful tool for customizing the instance value that is exposed to parent components when using ref on a child component, allowing you to expose only the methods or properties that are needed by the parent component.

## What is the difference between usememo and usecallback explain with example

useMemo and useCallback are both React Hooks that can be used to optimize the performance of functional components by memoizing the results of expensive calculations or functions. While they have some similarities, there are some key differences between them.

useMemo is used to memoize the result of an expensive calculation, while useCallback is used to memoize a function. The difference is that useMemo returns a value, while useCallback returns a function.

Here's an example to illustrate the difference between useMemo and useCallback:

```js
import React, { useState, useMemo, useCallback } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const memoizedFibonacci = useMemo(() => fibonacci(count), [count]);

  const handleClick = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Fibonacci: {memoizedFibonacci}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```

In this example, we have a count state variable that is incremented when the user clicks the "Increment" button. We're using useMemo to memoize the result of the fibonacci function, which calculates the nth number in the Fibonacci sequence. We're also using useCallback to memoize the handleClick function, which updates the count state.

When we run this example, we can see that the memoizedFibonacci value is only calculated when the count state changes, thanks to the useMemo hook. Similarly, the handleClick function is only recreated when the count state changes, thanks to the useCallback hook. This improves the performance of the component, since we're only calculating the Fibonacci sequence and recreating the function when necessary.

Overall, useMemo and useCallback are useful tools for optimizing the performance of functional components by memoizing expensive calculations and functions. You should use useMemo when you need to memoize a value, and useCallback when you need to memoize a function.

## explain usereducer hook with an example

useReducer is a React Hook that is used to manage state in functional components. It is an alternative to the useState Hook, and is useful when the state logic is complex and involves multiple sub-values or when the next state depends on the previous state.

Here's an example of how to use useReducer:

```js
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
```

In this example, we have an initial state of { count: 0 } and a reducer function that takes the current state and an action and returns the next state based on the action. The reducer function handles two actions: increment, which increases the count value by 1, and decrement, which decreases the count value by 1.

We use the useReducer Hook to initialize the state and the dispatch function, which is used to dispatch actions to the reducer. We pass the reducer function and the initial state to useReducer, and it returns the current state and the dispatch function.

In the Example component, we render the current count value and two buttons that dispatch the increment and decrement actions when clicked. When an action is dispatched, the reducer function is called with the current state and the action, and it returns the next state based on the action. The component then re-renders with the updated state.

Overall, useReducer is a powerful tool for managing state in functional components, especially when the state logic is complex or involves multiple sub-values. It allows you to separate the state logic from the component logic and provides a more predictable and consistent way to update state.
