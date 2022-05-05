## useCallback

The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
  
Every time a component re-renders, its functions get recreated. Now the function component will only re-render when the function prop changes.  
  
```js
  const funName = useCallback(() => {
    function statements
  },[prop])
```

## useMemo

```js
  const data = useMemo(() => expensiveCalculationfunction, [dependency_prop])
```

The expensive calculation function calculates again only if the dependency_prop changed.

## useRef

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can also be used to access a DOM element directly.

[See Example](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/useref-with-example.md)

