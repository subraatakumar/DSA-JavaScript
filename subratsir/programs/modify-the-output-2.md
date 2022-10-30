
The below program prints 5, 5 times after 1 second. Modify the program so that after each second it will print the next number, starting from 1. Remember that you can't use setInterval.

```js
function randomFunc(){
  for(var i = 0; i < 5; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc();
```

Solution:

```js
function randomFunc(){
  for(let i = 1; i <= 5; i++){
    setTimeout(()=> console.log(i),1000*i);
  }
}

randomFunc();
```
