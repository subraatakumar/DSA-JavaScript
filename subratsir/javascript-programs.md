# Reverse a number

```js
let a = 12345;
parseInt(a.toString().split('').reverse().join(''));
```

# Flatten multi dimensional array

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


