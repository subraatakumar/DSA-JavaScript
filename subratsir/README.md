# DSA-JavaScript

## [Linked List](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/linked-list.md)

## [Array](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/arrays.md)

## JavaScript Interview Preparation

- [difference between let and var](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/difference-between-let-var.md)
- [Understand Hoisting](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/Hoisting-In-JavaScript.md)
- [Understand Hoisting Better](https://github.com/subratsir/DSA-JavaScript/blob/main/subratsir/Understand-Hoisting-Better.md)

[Video Tutorial for Below Questions](https://www.youtube.com/watch?v=abbdJ4Yfm54)

- What is the difference between map and filter
- What is the difference between null and undefined
- What is the difference between == and ===
- Explain Event Delegation
- Flatten below array

~~~
let arr = [
  [1,2],
  [3,4],
  [5,6,[7,8],9],
  [10,11,12],
  ];
  
  // [1,2,3,4,5,6,7,8,9,10,11,12]
~~~

- Difference between var, let and const
- What is the output of below code ?

~~~js
function a(){
  for(var i=0; i<3; i++){
    setTimeout(function log(){
      console.log(i); // What is logged ?
    }, i*1000);
  }
}

a();
// output :
// 3
// 3
// 3
// Replace var with let, the output :
// 0
// 1
// 2
~~~

- explain call apply and bind
- composition polyfill

~~~
function addFive(a){
  return a+5;
}

function subtractTwo(a){
  return a-2;
}

function multiplyFour(a){
  return a*4;
}


~~~

  - implement pipe
  - implement promise.all
  - React Interview Questions
    - Explain life cycle method both in class and function
    - ways to center a div
    - What is CSS Box Model ?
    - Implement a de bounce function
    - 
