# Explain the use of setInterval

setInterval is used to call a specified function repeatedly after certain miliseconds. clearInterval can be used to stop this looping.

```js
let myInterval = setInterval(function, milliseconds);
clearInterval(myInterval);
```

Example

```js
let a = setInterval(()=>{
	console.log("Time up")
},1000)

setTimeout(() => {
	clearInterval(a);
},3000)
```
