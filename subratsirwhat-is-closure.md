# What is Closure

A closure gives us access to an outer function's scope from an inner function. In javascript closures are created at function creation time, every time a function is created.

```js
function outerFunction() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function innerFunction() { 
    console.log(num);
  }
  num++;
  return innerFunction;
}

var number = outerFunction();
number(); // 2
```

In above example, outerFunction returns innerFunction and assigns to number. Now number is called means innerFunction is called and it gives us access to outer function's variable `num`.
