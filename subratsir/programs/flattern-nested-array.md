# Flattern a Nested Array in JavaScript.

```js
function flatten(){
  let result = [];
    return fla = (a) => {
      a.forEach((x)=>{
        Array.isArray(x) ? fla(x) : result.push(x);
      })
      return result;
    }
}

let a = [1,2,3,[4,5,[6,7],8,9],10,11]
console.log(flatten()(a))
```

