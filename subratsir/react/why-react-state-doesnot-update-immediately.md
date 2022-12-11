# Why react state does not update immediately /

## Class Component

```js
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { no: 1 };
  }

  onClick() {
    this.setState({ no: this.state.no + 1 });
    console.log(this.state.no) // logs the previous value
  }

  render() {
    return (
      <div>
        <h2>{this.state.no}</h2>
        <button onClick={()=>this.onClick()}>+</button>
      </div>
    );
  }
}

export default App;
```

## Function Component
```js
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [no, setNo] = useState(1);

  const onClick = () => {
    setNo(no=>no+1);
    console.log(no); // logs previous value
  };

  return (
    <div className="App">
      <button onClick={onClick}>Ok</button>
    </div>
  );
}
```

In the above program `console.log(no)` which is right after state updation returns previous value. 

## State Update is Async

State updates alter the virtual DOM and cause re-rendering which may be an expensive operation. Making state updates synchronous could make the browser unresponsive due to huge number of updates.

To avoid these issues a careful choice was made to make state updates async, as well as to batch those updates.

## Solution in Class Components

`setState` in class component provides a callback function which will be called after state update.

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { no: 1 };
  }

  onClick() {
    this.setState({ no: this.state.no + 1 },console.log(this.state.no));
  }

  render() {
    return (
      <div>
        <h2>{this.state.no}</h2>
        <button onClick={()=>this.onClick()}>+</button>
      </div>
    );
  }
}

export default App;
```

## Solution in Function Components

State updates in functional components are affected by closures and you only receive the updated value in the next render cycle.

In function components we use `useState` hook. The function provided by `useState` does not have a second argument of call back function. So in this case we have to use `useEffect` hook and in the second argument which is an array of dependencies pass the variable which state updation you want to track.

```js
import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [no, setNo] = useState(1);

  const onClick = () => {
    setNo(no=>no+1);
  };

  useEffect(() => {
    console.log(no);
  }, [no, setNo]);

  return (
    <div className="App">
      <button onClick={onClick}>Ok</button>
    </div>
  );
}

```



