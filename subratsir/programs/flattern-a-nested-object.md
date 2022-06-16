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

