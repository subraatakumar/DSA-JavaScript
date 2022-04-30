# Why does changing an array in javascript affect copies of the array created using equal sign ?

Variables in javascript hold only a reference to an object, not the object itself. An array in javascript is also an object. So when we create another copy using `=` sign, Both variables hold the reference to the same object. So any change in the object reflect in both.

# What is the proper way of cloning an array ?

We can create another copy using spread operator. 

```js
let a = [1,2,3,4,5];
let b = [...a];
console.log(b); // (5) [1,2,3,4,5]
b.push(6);
console.log(b); // (5) [1,2,3,4,5]
console.log(a); // (5) [1,2,3,4,5,6]
```


We can create a copy using concat 

```js
let c = [].concat(a);
```

We can create a copy using slice

```js
let d = a.slice(0) 
```

