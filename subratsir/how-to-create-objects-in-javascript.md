# How to create Objects in JavaScript ?

There are three ways to create objects.

## Through object literal.

```js
const myObject = {
  emp_code: 15,
  emp_name: "Subrata Das",
  printDetails: function(){
    console.log(emp_code, emp_name);
  }
}
```

## Through factory functions

```js
function createMyObject(emp_code, emp_name){
  return {
    emp_code,
    emp_name,
    printDetails: function(){
      console.log(emp_code, emp_name);
    }
  }
}

const myObject = createMyObject(15, "Subrata Das");
const anotherMyObject = createMyObject(16, "Ramesh Jena");
```

## Using constructor functions

```js
function CreateMyObject(emp_code, emp_name){
    this.emp_code = emp_code;
    this.emp_name = emp_name;
    this.printDetails= function(){
      console.log(emp_code, emp_name);
    }
}

const myObject = new CreateMyObject(15, "Subrata Das");
const anotherMyObject = new CreateMyObject(16, "Ramesh Jena");
```

Using factory and constructor functions we can create many objects of same type but with different values.

Note: It is a good practice to capitalize the first letter of a constructor function.
