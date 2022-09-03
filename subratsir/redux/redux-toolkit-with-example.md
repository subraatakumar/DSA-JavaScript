# Redux Toolkit With Example

## redux/store.js

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}
});
```

Till now we have not connected any reducer to our store. Let us connect store to redux app root so that we can access it through out the app.

```js
import "./styles.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Home from "./Home";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Home />
      </div>
    </Provider>
  );
}
```

