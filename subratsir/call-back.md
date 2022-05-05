# JavaScript CallBack

A callback is a function passed as an argument to another function

```js
function printValue(val) {
  document.getElementById("demo").innerHTML = val;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, printValue);
```
