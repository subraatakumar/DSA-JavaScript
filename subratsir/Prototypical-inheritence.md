# The Prototypal Inheritance

By default every object with its methods and properties contains an internal and hidden property known as `Prototype`. The Prototypal Inheritance is a feature in javascript by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the `Prototype` of an object, we use `Object.getPrototypeOf` and `Object.setPrototypeOf`. Nowadays, it is being set using `__proto__`.

```js
let a = {
	  fname : "Subrat",
	  lname : "Das",
	  print : function(){
		console.log(`${this.fname} ${this.lname}`)
	    }
        }

let b = new Object();
// b is inheriting object a
b.__proto__ = a;
b.print();
```

[Home](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/README.md)
