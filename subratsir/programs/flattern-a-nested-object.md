# Flattern a nested object in Javascript 

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

```js
{ a: 1, b: 2, c: 3, e: 4, f: 5, h: 6, i: 7, j: 8, k: 9, l: 10, m: 11 }
```

# Other Way of Output

```js
export default function flattenObject() {
  let result = {};
  return function fla(obj, key) {
    for (let x in obj) {
      console.log("x", x)
      if (typeof obj[x] === "object") {
        key ? fla(obj[x], key + "_" + x) : fla(obj[x], x);
      } else {
        if (key) {
          result[key + "_" + x] = obj[x];
        } else {
          result[x] = obj[x];
        }
      }
    }
    return result;
  }
}

let a = {a:1,b:2,c:3,d:{e:4,f:5,g:{h:6,i:7},j:8,k:9},l:10,m:11};
console.log(flatten()(a))
```

```js
{
  a: 1,
  b: 2,
  c: 3,
  d_e: 4,
  d_f: 5,
  d_g_h: 6,
  d_g_i: 7,
  d_j: 8,
  d_k: 9,
  l: 10,
  m: 11
}
```


