# What will be the output ? Set -2 

1)

```js
function randomFunc(){
  for(var i = 1; i <= 5; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc();
```

2)

```js
function randomFunc(){
  for(let i = 1; i <= 5; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc();
```

3)

```js
const promise = () => Promise.resolve("Success");

function first(){
	promise().then(res => console.log(res))
  console.log("First");
}

async function second(){
	const res = await promise();
  console.log(res);
  console.log("Second");
}

first();
second();
```

4)

```js
console.log('Script Start');
setTimeout(()=>{
	console.log('setTimeout 1');
},0)

Promise.resolve().then(()=>{
	console.log("Promise 1")
}).then(()=>{
	console.log("Promise 2")
})

setTimeout(()=>{
	console.log("setTimeout 2")
},0)

console.log('script ends')
```


Solutions:

1) After 1 second 6 will be printed 5 times.
2) After 1 second 

```
1
2
3
4
5
```

3)

```
First
Success
Success
Second
```

4)

```
Script start // sync task - main
Script ends // sync task - main
promise 1 // async task - micro task queue
promise 2 // async task - micro task queue
setTimeout 1 // async task - task queue
setTimeout 2 // async task - task queue
```
