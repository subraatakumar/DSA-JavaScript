# Spread Operator

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(rest); // [3,4,5,6]
```

(...) dots are also used as rest operator. 

The main difference between rest and spread is that the rest operator puts the rest of user-supplied arguments into a JavaScript array. But the spread operator expands iterables into individual elements.

```js
// Use rest operator to enclose the rest arguments into otherInfo array:
function myBio(firstName, lastName, ...otherInfo) { 
  console.log('First Name:', firstName);
  console.log('Last Name:',lastName);
  console.log('Other Info:', otherInfo);
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Subrata", "Das", "Indian", "Mobile", "Developer");

// The invocation above will return:
First Name: Subrata
Last Name: Das
Other Info: ["Indian", "Mobile", "Developer"]
```

