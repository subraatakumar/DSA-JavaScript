
```js
const obj1 = {
	name: "Ramesh",
  age: "45"
}

const obj2 = {
	name: "Subrata",
  age: "45",
  printName: function(){
  	console.log(`The age of ${this.name} is ${this.age}`)
  }
}

// add statement(s) after that so that it will print "The age of Ramesh is 45." on console
```

### Solution1:

```js
obj2.printName.call(obj1);
```

### Solution2:

```js
obj2.printName.apply(obj1);
```

### Solution3:

```js
const newFn = obj2.printName.bind(obj1);
newFn();
```
