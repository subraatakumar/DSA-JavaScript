
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

Variables, declared with `var`, are either function-scoped or global-scoped. But variables declared with `let` are global scoped.
~~~javascript
    var x = 5; // Global-Scoped variable declaration
    (function(){
        var x = "Ramesh"; // Function-Scoped variable declaration
        if(true){
            var x = "Subrat"; // var is not block-scoped so it will also be function-scoped
            console.log(x); // outputs "Subrat"
        }
        console.log(x); // outputs "Subrat"
    })();
    console.log(x); // outputs 5
~~~

- If you have suggestions what to improve - please submit a [GitHub issue](https://github.com/subratsir/DSA-JavaScript/issues/new) or a pull request instead of commenting.
