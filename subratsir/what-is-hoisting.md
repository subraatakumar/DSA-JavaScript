# What is Hoisting ?

In JavaScript, hoisting allows you to use functions and variables before they're declared. 

## Variable Hosting in JavaScript

JavaScript interpreter splits the declaration and assignment of variables and takes the declarations to the top of their containing scope before execution. This is called hoisting.

We know that, a variable can be decalred in three different ways var, let and const. Variable hosting acts deferently depending on how the variable is declared. 

### Variable hoisting with var

When the interpreter hoists a variable declared with var, it initializes its value to undefined. But if the variable is not declared in that scope then it will return not defined.



