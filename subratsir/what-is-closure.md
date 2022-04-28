# What is Closure

A closure gives us access to an outer function's scope from an inner function. In javascript closures are created at function creation time, every time a function is created.

```js
function outerFunction() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function innerFunction() {  // a closure
    console.log(num);
  }
  num++;
  return innerFunction;
}

var number = outerFunction();
number(); // 2
```

In above example, outerFunction returns innerFunction and assigns to number. Now number is called means innerFunction is called and it gives us access to outer function's variable `num`.

## Time optimization using closure

```js
function find(index){
  let a = [];
  for(let i=0; i< 1000000; i++){
    a[i] = i*i;
  }
  
  console.log(a[index]);
  
}

console.time("6"); 
find(6); 
console.timeEnd("6"); // 62 miliseconds
console.time("20");
find(20);
console.timeEnd("20"); // 112 Miliseconds

```

By using closures we can optimise above function

```js
function find(){
  let a = [];
  for(let i=0; i< 1000000; i++){
    a[i] = i*i;
  }
  return function(index){
  console.log(a[index]);
  } 
}
const closure = find();
console.time("6"); 
closure(6); 
console.timeEnd("6"); // 0.12 miliseconds
console.time("20");
closure(20);
console.timeEnd("20"); // 0.15 Miliseconds
```

