
# React Suspense

React Suspense is a React component that suspends a component('s) being render until a certain condition has been met, and will display a fallback option. This fallback option is required, and it may be a string or another React component such as a spinner.


```js
import React from 'react';

// Dynamic import()
const CatAvatar = React.lazy(() => import('./path/to/cat/avatar'));

// Displays "loading..." to the user until CatAvatar
// has finished loading.
const AppContainer = () => (
  <React.Suspense fallback="loading...">
    <CatAvatar />
  </React.Suspense>
);
```
