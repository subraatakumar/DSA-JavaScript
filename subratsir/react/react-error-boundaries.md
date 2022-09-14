# React Error Boundaries

Error boundaries are react components that catch javascript errors anywhere in their child component tree, log these errors and dispaly a fallback UI. This concept is introduced in React 16.

### error boundaries do not catch errors for:

- ent handlers (learn more)
- ynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
- rver side rendering
- rors thrown in the error boundary itself (rather than its children)

Only class components can be error boundaries. In react class component use `getDerivedStateFromError()` to render fallback UI after an error has been thrown. Use `componentDidCatch()` to log error information.

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```
Then you can use it as a regular component:

```js
<ErrorBoundary key={uniqueKey}>
   <FuncationalOrChildComponent {...props} />
</ErrorBoundary>
```

PS: As usual the key property is very important as it will make sure to re-render the ErrorBoundary component if you have dynamic child elements.


[Read this article for more](https://reactjs.org/docs/error-boundaries.html)

