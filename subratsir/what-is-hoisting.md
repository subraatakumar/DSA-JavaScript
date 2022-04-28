# What is Hoisting ?

In JavaScript, hoisting allows you to use functions and variables before they're declared. 

## Variable Hosting in JavaScript

JavaScript interpreter splits the declaration and assignment of variables and takes the declarations to the top of their containing scope before execution. This is called hoisting.

We know that, a variable can be decalred in three different ways var, let and const. Variable hosting acts deferently depending on how the variable is declared. 

### Variable hoisting with var

When the interpreter hoists a variable declared with var, it initializes its value to `undefined`. But if the variable is not declared in that scope then it will return `not defined`.

### Variable hoisting with let and const

Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or const variable before it's declaration will result in a ReferenceError because of Temporal Dead Zone. TDZ also works in same manner for function parameter when assigned default value.

Surprisingly typeof a hoisted let or const will through error because we can check the type of an undeclared variable as undefined.

## Function Hoisting in JavaScript

Functions can be hoisted but not arrow funcions.









