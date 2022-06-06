# SetTimeout

setTimeout can be used to call a specific function after specified miliseconds. setInterval calls the function in a loop, but setTimeout calls only once. clearTimeout can be used if you want to stop the calling.

```js
myTimeout = setTimeout(function, milliseconds);
clearTimeout(myTimeout);
```

```js
let btn = document.createElement('button');
btn.innerText = "Click Me";
let btnNo = document.createElement('button');
btnNo.innerText = "Don't Show";
let p = document.createElement('p');
p.innerText = "Please wait 10 seconds...to see button. Or click don't show.";
let body = document.body;
body.appendChild(p);
body.appendChild(btnNo);
let myTimeout = setTimeout(() => {
  body.appendChild(btn);
  p.innerText="";
},10000)

btnNo.addEventListener('click',function(){
	clearTimeout(myTimeout)
  p.innerText = ""
  this.style.display = "none"
  // Remember if you are using arrow function then "this" will not work
})
```
