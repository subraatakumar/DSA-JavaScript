# How to stop unnecessary re-rendering of child component

```js
import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <Child />
    </div>
  );
}

const Child = () => {
  console.log("Child 1 Component rendered...");
  return <p>Child Component </p>;
};
```

In above example the Child component will re-render everytime the state updates. To avoid this un-necessary re-rendering of child component we can use React.memo as below.

```js
import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <Child />
    </div>
  );
}

const Child = React.memo(() => {
  console.log("Child 1 Component rendered...");
  return <p>Child Component </p>;
});
```

Now clicking on the Increase button will increase the button but will not re-render the child component. To test this a console.log is used in child component.
