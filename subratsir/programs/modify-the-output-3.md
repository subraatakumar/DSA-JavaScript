
```js
const promise = () => Promise.resolve("Success");

function first(){
	promise().then(res => console.log(res))
  console.log("First");
}

function second(){
	const res = await promise();
  console.log(res);
  console.log("Second");
}

first();
second();
```

The above program should output 

```
First
Success
Success
Second
```

but it is throwing error. Please rectify the program so that it will not throw error.


## Solution:

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

we can use `await` in an `async` function.
