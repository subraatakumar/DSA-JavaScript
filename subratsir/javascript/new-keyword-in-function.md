# What is the use of `new` keyword in JavaScript function ?

The new keyword is used in JavaScript to create a object from a constructor function. The new keyword has to be placed before the constructor function call and will do the following things:

- Creates a new object
- Sets the prototype of this object to the constructor function's prototype property
- Binds the this keyword to the newly created object and executes the constructor function
- Returns the newly created object

```js
function Dog (age) {
  this.age = age;
}

const doggie = new Dog(12);

console.log(doggie);
console.log(Object.getPrototypeOf(doggie) === Dog.prototype) // true
```

## What exactly happens:

- const doggie says: We need memory for declaring a variable.
- The assignment operator = says: We are going to initialize this variable with the expression after the =
- The expression is new Dog(12). The JavaScript engine sees the new keyword, creates a new object and sets the prototype to Dog.prototype
- The constructor function is executed with the this value set to the new object. In this step is where the age is assigned to the new created doggie object.
- The newly created object is returned and assigned to the variable doggie.

Please take a look at my observation on case III below. It is about what happens when you have an explicit return statement in a function which you are newing up. Have a look at the below cases:

## Case I:

```js
var Foo = function(){
  this.A = 1;
  this.B = 2;
};
console.log(Foo()); //prints undefined
console.log(window.A); //prints 1
```

Above is a plain case of calling the anonymous function pointed by variable Foo. When you call this function it returns undefined. Since there isn’t any explicit return statement, the JavaScript interpreter forcefully inserts a return undefined; statement at the end of the function. So the above code sample is equivalent to:

```js
var Foo = function(){
  this.A = 1;
  this.B = 2;
  return undefined;
};
console.log(Foo()); //prints undefined
console.log(window.A); //prints 1
```
When Foo function is invoked window is the default invocation object (contextual this) which gets new A and B properties.

## Case II:

```js
var Foo = function(){
  this.A = 1;
  this.B = 2;
};
var bar = new Foo();
console.log(bar()); //illegal isn't pointing to a function but an object
console.log(bar.A); //prints 1
```

Here the JavaScript interpreter, seeing the new keyword, creates a new object which acts as the invocation object (contextual this) of anonymous function pointed by Foo. In this case A and B become properties on the newly created object (in place of window object). Since you don't have any explicit return statement, JavaScript interpreter forcefully inserts a return statement to return the new object created due to usage of new keyword.

## Case III:

```js
var Foo = function(){
  this.A = 1;
  this.B = 2;
  return {C:20,D:30};
};
var bar = new Foo();
console.log(bar.C);//prints 20
console.log(bar.A); //prints undefined. bar is not pointing to the object which got created due to new keyword.
```

Here again, the JavaScript interpreter, seeing the new keyword, creates a new object which acts as the invocation object (contextual this) of anonymous function pointed by Foo. Again, A and B become properties on the newly created object. But this time you have an explicit return statement so JavaScript interpreter will not do anything of its own.

The thing to note in case III is that the object being created due to new keyword got lost from your radar. bar is actually pointing to a completely different object which is not the one which JavaScript interpreter created due to the new keyword.

Quoting David Flanagan from JavaScript: The Definitive Guide (6th Edition), Chapter 4, Page # 62:

```js
When an object creation expression is evaluated, JavaScript first creates a new empty object, just like the one created by the object initializer {}. Next, it invokes the specified function with the specified arguments, passing the new object as the value of the this keyword. The function can then use this to initialize the properties of the newly created object. Functions written for use as constructors do not return a value, and the value of the object creation expression is the newly created and initialized object. If a constructor does return an object value, that value becomes the value of the object creation expression and the newly created object is discarded.
```

# Additional information:

- Case I	Constructor function
- Case II	Constructor function
- Case III	Factory function

Code smell in case III - Factory functions should not be used with the new keyword which I've shown in the code snippet above. I've done so deliberately only to explain the concept.





