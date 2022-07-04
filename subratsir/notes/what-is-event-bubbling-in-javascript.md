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
document.getElementById("grandparent").addEventListener("click",() => {
	console.log("clicked grandparent.")
})

document.getElementById("parent").addEventListener("click",() => {
	console.log("clicked parent.")
})

document.getElementById("children").addEventListener("click",() => {
	console.log("clicked children.")
})
```

### Result :

If you click on grandparent, It will display "clicked on grandparent.".

If you click on parent, It will display first "clicked on parent". Then the event will propagate to it's parent and will display, "Clicked on grandparent."

If you click on child, It will display first "clicked on child". Then the event will propagate to it's parent and will diaplay, "clicked on parent". Then the event will propogate to it's grand parent and will display, "clicked on grandparent". If your program has any event handler for document, then that will also execute.

### How to overcome this :

If you want to overcome this and want to execute separate events for all three separate divs, then follow this.


```js
document.getElementById("grandparent").addEventListener("click",(e) => {
	if(e.target.id === "grandparent"){
  	console.log("clicked grandparent.")
  }
})

document.getElementById("parent").addEventListener("click",(e) => {
	if(e.target.id === "parent"){
  	console.log("clicked parent.")
  }
})

document.getElementById("children").addEventListener("click",(e) => {
	if(e.target.id === "children"){
  	console.log("clicked children.")
  }
})
```

[Watch video tutorial on youtube](https://youtu.be/hZAjb86f3XQ)


## [Home](https://github.com/subratsir/DSA-JavaScript/tree/main/subratsir/)
