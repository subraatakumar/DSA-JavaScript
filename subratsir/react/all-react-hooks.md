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





