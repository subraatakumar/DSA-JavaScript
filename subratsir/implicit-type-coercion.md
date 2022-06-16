# What is implicit type coercion in JavaScript ?

The automatic type conversion of one data type to another by Javascript is called implicit type coercion.

```js
console.log( +"c") // NaN (Not a Number)
// NaN means the value is of number type but not a legal number
console.log(typeof ( +"c")) // number
console.log(("3"+3)) // "33"
console.log(typeof ("3"+3)) // string
console.log((3+"3")) // "33"
console.log(typeof (3+"3")) // string
console.log(("3"-3)) // 0
console.log(typeof ("3"-3)) // number
```

[Home](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/README.md)
  
