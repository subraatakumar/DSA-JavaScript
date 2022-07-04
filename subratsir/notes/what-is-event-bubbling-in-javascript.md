# What is event bubbling in Javascript ?

Event bubbling is the propogation of an event triggered on any element to it's parent as well as grand parent and so on till the root html element.

```html
<div id="grandparent"> Grand Parent
  <div id="parent"> Parent
    <div id="children"> 
      Children
    </div>
  </div>
</div>
```

```css
body * {
  margin: 10px;
  border: 1px solid green;
}
```

```js

```
