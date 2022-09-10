# Array Slice

```js
let a = [1,2,3,4,5,6,7,8,9];
let b = a.slice(4,5); // 4th index to 5th element
console.log(b)  // [5]
let c = a.slice(4,8); // 4th index to 5th element
console.log(c)  // [5, 6, 7, 8]

```

# Array Splice

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
let a = [1,2,3,4,5,6,7,8,9]
a.splice(1,0,99) // Removes no element and put extra element 99 at 2nd position
console.log(a) // [1, 99, 5, 6, 7, 8, 9]
a.splice(1,3,88,77) // Removes three elements including 2nd element and replaces with 88 and 77
console.log(a)  // [1, 88, 77, 4, 5, 6, 7, 8, 9]
```
