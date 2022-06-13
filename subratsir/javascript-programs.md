- [Sort JavaScript Array](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/programs/sort-array-javascript.md)
- [Suffle JavaScript Array](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/programs/suffle-array-javascript.md)
- [Find All Even and Odd numbers from an array of numbers](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/programs/find-all-even-and-odd-numbers-from-javascript.md)
- [Reverse a String](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/programs/reverse-a-string-in-javascript.md)
- [Find all vowels of a string](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/programs/find-all-the-vowels-of-a-string.md)

# Reverse a number

```js
let a = 12345;
parseInt(a.toString().split('').reverse().join(''));
```

# Flatten nested array

```js
function flatten(){
  let result = [];
    return fla = (a) => {
      a.map((x)=>{
        Array.isArray(x) ? fla(x) : result.push(x);
      })
      return result;
    }
}

let a = [1,2,3,[4,5,[6,7],8,9],10,11]
console.log(flatten()(a))
```

# flatten nested object

```js
function flatten(){
  let result = {};
    return function flat(a){
			for(let x in a){
      	(typeof a[x] === "object") ? flat(a[x]) : result[x] = a[x];
      }
      return result;
    }
}

let a = {a:1,b:2,c:3,d:{e:4,f:5,g:{h:6,i:7},j:8,k:9},l:10,m:11};
console.log(flatten()(a))
```

