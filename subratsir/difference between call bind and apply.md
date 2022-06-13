
~~~js
let print1 = function(){
  console.log(this.name);
}

let userDetails1 = {
  name : "Subrat Dash",
  desig : "Software Developer,
  print2 : function(){
    console.log(this.name);
  }
}

userDetails1.print2(); // Subrat Dash
// Function Borrowing
print1.call(userDetails1); // Subrat Dash

let userDetails2 = {
  name : "Ramesh Jena",
  desig : "Software Developer"
}

// Function borrowing
userDetails1.print2.call(userDetails2); // Ramesh Jena
print1.call(userDetails2); // Ramesh Jena

let print3 = function(state,country){
  console.log(this.name+" is from "+state+", "+country);
}

let newFn = print3.bind(userDetails2,"Odisha","India.");
newFn() // Ramesh Jena is from Odisha, India.

print3.apply(userDetails2,["Odisha","India."]); // arguments are passed as array. rest it works as call
print3.call(userDetails2,"Odisha","India."); // arguments are passed as separate element 

~~~

## Another Example :

```js
  const employee = {
    firstName: "Subrat",
    lastName: "Dash",
    getFullName: function(city, desig){
      console.log(`${this.firstName} ${this.lastName} of ${city} is working as ${desig}`);
    }
  }
  
  const emp1 = {
    firstName: "Ramesh",
    lastName: "Jena"
  }
  
  employee.getFullName.call(emp1, "Rayagada", "Teacher")
  
  const emp2 = {
    firstName: "Ramesh",
    lastName: "Jena"
  }
  
  employee.getFullName.apply(emp2, ["Rayagada", "Software Developer"])
```

call and apply both are used for function borrowing. The only difference is that call takes comma separated arguments and apply takes array of arguments. 

To run the function we have to use the same line again and again. This problem is solved by `bind`.

```js
const newFn = employee.getFullName.bind(emp1);

newFn("Rayagada","Teacher");
```

Now we can run this new function `newFn` as many times as required.

Based on our requirements we can use call apply or bind. Basically if we need the result immidiately, we can use call or apply and If we need the result at a later time then we can use bind and create a new function out of it.

## Finding minimum from an array of elements using apply

```js
  let z = [7,5,3,16,18,12,11,7]
  console.log(Math.min(...z)) // Find minimum using spread operator
  console.log(Math.min.apply(null,z)) // Find minimum using apply
```

## Another Example

```js
let emp1 = {
	name : "Subrat",
  roll : 15
}

function printDetails(rem1){
	console.log(`Employee Code of ${this.name} is ${this.roll} and belongs to ${rem1}`)
}

printDetails.call(emp1); // Employee Code of Subrat is 15 and belongs to undefined
printDetails.call(emp1, "Neosoft Corporation"); // Employee Code of Subrat is 15 and belongs to Neosoft Corporation
printDetails.apply(emp1, ["Neosoft Corporation"]); // Employee Code of Subrat is 15 and belongs to Neosoft Corporation

const function1 = printDetails.bind(emp1);

function1("Service Based.")  // Employee Code of Subrat is 15 and belongs to Service Based.

```
