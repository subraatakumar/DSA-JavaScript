// Implicit and Explicit Binding
var obj = {
  name : "Ramesh",
  display: function(){
    console.log(this.name);
  },
}

var obj1 = {
  name : "Subrat Sir",
}

var obj2 = {
  name : "Suresh",
  display : () => {
    console.log(this.name);
  },
}

obj.display.call(obj1); // Output Subrat Sir
obj.display(); // Output Ramesh
obj2.display(); // This will display global window object's name. So in browser outputs blank and in codepen it outputs CodePen
