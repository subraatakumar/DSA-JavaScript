
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


