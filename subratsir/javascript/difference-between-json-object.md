# Difference between JSON and JavaScript Object 

- JSON stands for Javascript Object Notation and can not contain function but JS Object can.
- JSON can be created and used by other programming languages but JS Object can only be used with in JS.
- JSON keys should be enclosed with in double quotes(single quote is not allowed). In JS Data quotes around key is optional. It is necessary only if the key contains a space in between it.
- The JSON values can only be one of the six datatypes (strings, numbers, objects, arrays, Boolean, null). JavaScript values on the other hand can be any valid JavaScript Structure.

```js
const x = {
const x = {
  firstname: "Subrata",
  lastname: "das",
  age: 47,
  name: function () {
    return this.firstname + " " + this.lastname;
  }
};
```

In above code x is a `JS Object`. let us convert it to JSON.

```js
const y = JSON.parse(x);
console.log(y); // `{"firstname":"Subrata","lastname":"das","age":47}`
console.log(typeof y) // string
console.log(typeof x) // object
```

## Example of valid JS Object

```js
const x = {
  "firs tname": "Subrata", // valid
  'lastname': "das", // valid
  age: 47, // valid
  name: function () {
    return this["firs tname"] + " " + this.lastname; // example to access value if key contains space
  }
};
```




