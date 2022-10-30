The following program creates an array of 50 elements. The elements are filled with square of first 50 natural numbers. It prints the i th element of the array. The value of i received as a paramenter.

Each time you call the program, it creates the array again. This is definitely consumes more time. Modify the program so that no need to create the array again and again.

```js
function getElement(i){
  let arr = Array.from([...Array(50).keys()].map(k => Math.pow(k+1,2)))
  console.log(arr[i])
}

getElement(5);  // 36
getElement(12);   // 169
```

## Solution

This can be solved using closure.

```js
function bigFunction(){
  let arr = Array.from([...Array(50).keys()].map(k => Math.pow(k+1,2)))
  return (i) => console.log(arr[i])
}

const getElement = bigFunction();

getElement(5); 	// 36
getElement(12);	// 169
```

<hr>
Note: the mentioned 50 elements array can also be created using the below code

```js
let arr = Array.from({length: 50}, (_, i) => Math.pow(i + 1,2))
```
