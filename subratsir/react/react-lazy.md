# How to use React lazy loading for code spliting.

The React.lazy function lets you render a dynamic import as a regular component.

```js
const Home = React.lazy(() => import('./Home'));
```

The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

```js
<Suspense fallback={<div>Loading...</div>}>
   <Home />
</Suspense>
```
You can even wrap multiple lazy components with a single Suspense component.
  
