- Question

```js
async function myFunc(){
	console.log("2nd log")
}

async function y(){
  console.log("1st log")
  myFunc()
  console.log("4th log")
}

y();
```

- Output

```js
"1st log"
"2nd log"
"4th log"
```

- Question


```js
async function myFunc(){
	console.log("2nd log")
}

const x = () => Promise.resolve("3rd log")

async function y(){
  console.log("1st log")
  myFunc()
  let y = await x();
  console.log(y)  
  console.log("4th log")
}

y();
```

- Output

```js
"1st log"
"2nd log"
"3rd log"
"4th log"
```

- Question


```js
async function myFunc(){
	console.log("2nd log")
  let y = await x();
  console.log(y)  
}

const x = () => Promise.resolve("3rd log")

async function y(){
  console.log("1st log")
  myFunc()
  console.log("4th log")
}

y();
```

- Output

```js
"1st log"
"2nd log"
"4th log"
"3rd log"
```
