# Sort Integer array

```js
let s = ["Ramesh","Akshaya","Suresh","Mahesh","Vignesh"]
s.sort();
console.log(s); // ["Akshaya", "Mahesh", "Ramesh", "Suresh", "Vignesh"]

let a = [1,13,6,5,9,7,8,10];
a.sort();
console.log(a); // [1, 10, 13, 5, 6, 7, 8, 9]
```

In the above example, for string array we are getting the result as intended, but not for integer array. For Integer array look at the below example.

```js
// Sort ascending
let a = [1,13,6,5,9,7,8,10];
a.sort((a,b) => a-b);
console.log(a);

// Sort descending
let a = [1,13,6,5,9,7,8,10];
a.sort((a,b) => b-a);
console.log(a);

```

