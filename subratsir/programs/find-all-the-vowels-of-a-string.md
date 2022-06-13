# Find all the vowels of a string

```js
let name = "Subrat";
let vowels = name.split('').filter(n => ['a','e', 'i','o','u'].includes(n)).join("");
console.log(vowels); // ua
```

# Find all the letters of string which are not vowels

```js
let name = "Subrat";
let vowels = name.split('').filter(n => !['a','e', 'i','o','u'].includes(n)).join("");
console.log(vowels); // Sbrt
```


