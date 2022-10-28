# Spread & Rest Operator

Both looks same. The spread operator allows us to spread the value of an array, string (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable). The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.

```js
const list1 = ['Ramesh', 'Suresh'];
const list2 = ['Mahesh', ...list1, 'Ganesh', 'Subrata'];
console.log(list2) //['Mahesh', 'Ramesh', 'Suresh', 'Ganesh', 'Subrata']
```

```js
  let z = [7,5,3,16,18,12,11,7]
  console.log(Math.min(...z)) // Find minimum using spread operator
```

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

