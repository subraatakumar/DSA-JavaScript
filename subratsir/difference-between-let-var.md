
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
    })(); // IIFE (immediately-invoked function expressions. Explained at last about this)
    console.log(x); // outputs 5
~~~

let us use `let` instead of `var` and see the difference.
~~~javascript
    let x = 5; // Global-Scoped variable
    (function(){
        let x = "Ramesh"; // Function-Scoped variable
        if(true){
            let x = "Subrat";
            console.log(x); // Outputs "Subrat" - block scoped variable
        }
        console.log(x); // Outputs "Ramesh" - function scoped variable
    })();
    console.log(x); // Outputs 5 - Global scoped variable
~~~

Look at the below example
~~~javascript
    let x;
    console.log(x); // x is declared but not initialised so outputs undefined
    x = 10;
    console.log(x); // outputs 10
~~~

~~~javascript
    var x;
    console.log(x); // x is declared but not initialised so outputs `undefined`
    x = 10;
    console.log(x); // outputs 10
~~~

In the above 2 examples no difference in let and var. Let us look at the below 2 examples.

~~~javascript
    console.log(x); // `var` declarations are processed when the function starts for function-scoped variables 
    // and are processed when the script starts for global-scoped variables. So outputs `undefined`
    // It means declarations are hoisted but assignments are not
    // variable x is declared when script scarts but 10 will be assigned to it during the assignment statement.
    var x = 10;
    console.log(x); // 10
~~~

~~~javascript
    console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x);
~~~

- IIFE

In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE). This’s not something we should use nowadays, but you can find them in old scripts.

Below is an example of IIFE:

~~~javascript
(function() {

  var message = "Hello World!";

  console.log(message); // Hello World!

})();
~~~

Here, a Function Expression is created and immediately called. So the code executes right away and has its own private variables.


| var | let | const |
|-----|-----|-------|
| can be declared with out initialisation | can be declared with out initialisation | can not be declaerd with out initialisation |
| can be redeclared with in the scope | can not be re-declared with in the scope | can not be redeclared with in the scope |
| can be re-assigned a new value or updated | can be re-assigned a new value or updated | can never be updated |
| Functionally or Globally scoped | block scoped | block scoped |



- If you have suggestions what to improve - please submit a [GitHub issue](https://github.com/subratsir/DSA-JavaScript/issues/new) or a pull request instead of commenting.
