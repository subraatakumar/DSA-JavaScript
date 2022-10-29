# Object.assign()

The Object.assign() method copies all <b>enumerable own properties</b> from one or more source objects to a target object and returns the modified target object. For deep cloning, we need to use alternatives, because if the source value is a reference to an object, it only copies the reference value.

```js
// Example 1
const person1 = {a:"Suresh"}
const person2 = {b: "Ramesh"}
const person3 = {c: "Mahesh"}

const person = Object.assign(person1, person2, person3)
console.log(person) // {a: 'Suresh', b: 'Ramesh', c: 'Mahesh'}
console.log(person1) // {a: 'Suresh', b: 'Ramesh', c: 'Mahesh'}
console.log(person2) // {b: "Ramesh"}
console.log(person3) // {c: "Mahesh"}
```

```js
// Example 2
const person1 = {name:"Suresh"}
const person2 = {name: "Ramesh"}
const person3 = {name: "Mahesh"}

const person = Object.assign(person1, person2, person3)
console.log(person) // {name: 'Mahesh'}
console.log(person1) // {name: 'Mahesh'}
console.log(person2) // {name: 'Ramesh'}
console.log(person3) // {name: 'Mahesh'}
```

<hr>
A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable.
