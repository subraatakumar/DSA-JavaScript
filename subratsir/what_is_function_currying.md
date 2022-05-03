# What is function currying ?

In function currying A function can take only one argument and return a function which can take another argument. We have to use a series of nested functions for the number of arguments. The last function returns the result.

```js
function sum(x){
  return function(y){
    return x+y;
  }
}

sum(5)(3); // 8

// Arrow Function

const sum = (x) => (y) => x+y;

```js

## is it a currying function ?

```js
  function multiply(a){
    return function(b,c){
      return a*b*c;
    }
  }
```

No. It is a partial application function because inner function accepting 2 arguments.
