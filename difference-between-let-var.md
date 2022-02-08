
A variable is a named memory location to store data.

The statement below declares a variable named `x`.
~~~javascript
let x;
~~~

In older scripts you may find another keyword `var`.
~~~javascript
var x;
~~~

variables must be declared before assigning any value to it in strict mode or modular script.
~~~javascript
"use strict";
x = "Subrat"; // Uncaught ReferenceError: x is not defined
~~~

A variable can be declared only once with in a block scope using let.
~~~javascript
    var x = 5;
    console.log(x);
    var x = "ramesh"; // No Error
    console.log(x);

    let y = 5;
    console.log(x);
    let y = "ramesh"; //Uncaught SyntaxError: Identifier 'y' has already been declared
    console.log(x);  
~~~


If you have suggestions what to improve - please submit a [GitHub issue]() or a pull request instead of commenting.
