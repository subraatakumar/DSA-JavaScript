
A variable is a named memory location to store data.

The statement below declares a variable named `x`.
~~~javascript
let x;
~~~

In older scripts you may find another keyword `var`.
~~~javascript
var x;
~~~

A variable can be declared only once with in a block scope.
~~~javascript
    var x = 5;
    console.log(x);
    var x = "ramesh"; 
    console.log(x);

    let y = 5;
    console.log(x);
    let y = "ramesh"; //Uncaught SyntaxError: Identifier 'y' has already been declared
    console.log(x);  
~~~
