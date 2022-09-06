# Find the different letter

```
Input:
s = "abcdd"
t = "adcdeb"

Output:
e
```

```js
findTheDiff(s, t){
var sorted = s.split('').sort();
var sorted2 = t.split('').sort()
for(var i = 0; i< sorted2.length; i++){
    if(i == sorted2.length || sorted[i] != sorted2[i]){
        return(sorted2[i]);
    }
  }
}
```
