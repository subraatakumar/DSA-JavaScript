## What will be the output questions

Answers are given at last

1)
```js
  var foo = 1;
  function myFun(){
    console.log(foo);
    var foo = 2;
  }
```

2)
```js
  var foo = 1;
  function myFun(){
    console.log(foo);
    var foo = 2;
  }
```

3)
```js
  function myFun(){
    console.log(foo);
  }
  myFun();
```

4)
```js
  function myFun(){
    console.log(foo);
  }
  myFun();
 var foo = 1;
``` 

5)
```js
  function myFun(){
    console.log(foo);
  }
  myFun();
 let foo = 1;
``` 

6)
```js
let a = 2
let b = "2"
console.log(a==b)
console.log(a===b)
```

7)
```js
let a = null;
let b;
console.log(a==b)
console.log(a===b)
```

8)
```js
let a = 0;
let b = false;
console.log(a==b)
console.log(a===b)
```

9)
```js
let a = 0;
let b = false;
if(a){
	console.log("a is truthy")
}else{
	console.log("a is falsy")
}
if(b){
	console.log("b is truthy")
}else{
	console.log("b is falsy")
}
```

10)

```js
var b = 10
function test(){
	console.log(b);
  
  b++;
  console.log(b);
  
  var b=3;
  console.log(b);
}
test();
```

Answers:
1) Undefined : Reason: as var is function scoped, so foo inside the function will be hoisted at top of the function and foo will become undefined.
2) ReferenceError: Cannot access 'foo' before initialization at myFun : Reason: as let is block scoped, so foo inside the function will be hoisted but will be at temporal dead zone.
3) ReferenceError: foo is not defined at myFun : Reason: foo is neither defined in local scope or in global scope.
4) Undefined : Reason: With in function myFun, there is no existance of foo. So it will search in it's parent scope. In parent scope foo is hoisted.
5) ReferenceError: Cannot access 'foo' before initialization at myFun : Reason: Reason: With in function myFun, there is no existance of foo. So it will search in it's parent scope. In parent scope foo is hoisted but is at Temporal Dead Zone as declared with `let`.
6) true for a==b and false for a===b : Reason: == compares only value where as === compares value with type. a is of `number` type and b is of `string` type so the result will be false.
7) true for a==b and false for a===b : Reason: == compares only value where as === compares value with type. a is of `object` type and b is of `undefined` type so the result will be false.
8) true for a==b and false for a===b : Reason: == compares only value where as === compares value with type. a is of `number` type and b is of `boolean` type so the result will be false.
9) 
```
a is falsy
b is falsy
```

Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

Truthy values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false.

All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

10)

```
undefined
NaN
3
```

<hr/>

### What is coercion ?

the use of force to persuade someone to do something that they are unwilling to do. This is also called type casting in programming. 

  

