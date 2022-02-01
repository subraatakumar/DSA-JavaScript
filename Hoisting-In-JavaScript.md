# Hoisting in JavaScript
~~~javascript
//Example: 1
console.log(x)
var x = 7;
~~~
In most of the programming languages it will through an error because we can't use a variable before declaring it. But JavaScript is different. The output will be :
~~~
undefined
~~~
~~~javascript
// Example: 2
console.log(x)
~~~
It will through :
~~~
ReferenceError: x is not defined
~~~
~~~javascript
// Example: 3
console.log(Hello);

function Hello(){
  console.log("Hello World");
}
~~~
~~~
[Function: Hello]
~~~

Remember in JavaScript, Even before the code starts executing memory is being alocated to all variables and functions. Variables are undefined but not functions. 

In example 2 the output is not defined. Not defined means the variable is not present in the program. But undefined means it is present but not present in the scope.
~~~javascript
// Example: 4
console.log(Hello);

let Hello = () => {
  console.log("Hello World");
}
~~~
~~~
undefined
~~~
~~~javascript
// Example: 5
Hello()

let Hello = () => {
  console.log("Hello World");
}
~~~
~~~
TypeError: Hello is not a function
~~~

In Example 4 and 5 we changed the function to an arrow function. In this case it will behave like a variable. Thats why in Example 4 it is saying undefined and in Example 5 not a function.



