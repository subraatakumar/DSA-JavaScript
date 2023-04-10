avaScript provides a number of built-in methods that can be used to manipulate arrays in various ways. Here are some of the most commonly used array methods along with their descriptions:

1. push() - This method adds one or more elements to the end of an array.
```js
let fruits = ['apple', 'banana', 'orange'];
fruits.push('pear');
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']
```

2. pop() - This method removes the last element from an array.
```js
let fruits = ['apple', 'banana', 'orange'];
fruits.pop();
console.log(fruits); // ['apple', 'banana']
```

3. shift() - This method removes the first element from an array.

```js
let fruits = ['apple', 'banana', 'orange'];
fruits.shift();
console.log(fruits); // ['banana', 'orange']
```

4. unshift() - This method adds one or more elements to the beginning of an array.
```js
let fruits = ['apple', 'banana', 'orange'];
fruits.unshift('pear');
console.log(fruits); // ['pear', 'apple', 'banana', 'orange']
```

5. splice() - This method adds or removes elements from an array at a specific index.
```js
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'pear', 'kiwi');
console.log(fruits); // ['apple', 'pear', 'kiwi', 'orange']
```

6. slice() - This method creates a new array from a portion of an existing array.
```js
let fruits = ['apple', 'banana', 'orange', 'pear', 'kiwi'];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // ['banana', 'orange', 'pear']
```

7. concat() - This method combines two or more arrays into a new array.

```js
let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'pear', 'kiwi'];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // ['apple', 'banana', 'orange', 'pear', 'kiwi']
```

8. map() - This method creates a new array by calling a function on each element of an existing array.
```js
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

9. filter() - This method creates a new array with all elements that pass a certain condition.
```js
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```
10. reduce() - This method applies a function to each element of an array and reduces the array to a single value.
```js
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

These are just a few examples of the many methods available in JavaScript for manipulating arrays. By learning these methods, you can write more efficient and effective code when working with arrays in your JavaScript applications.




