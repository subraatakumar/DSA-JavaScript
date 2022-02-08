~~~javascript
    let callbacks = [];
    (function() {
    for (var i = 0; i < 5; i++) {
        callbacks.push( function() { return i; } );
        //console.log(callbacks[0]());
        console.log("Output with in loop");
        console.log(callbacks.map( (callback) => callback() ));
    }
    })();
    console.log("Output outside of loop");
    console.log(callbacks.map( (cb) => cb() ));
    //console.log(callbacks[0]());
~~~

Output :
~~~javascript
  Output with in loop
  [0]
  Output with in loop
  [1,1]
  Output with in loop
  [2,2,2]
  Output with in loop
  [3,3,3,3]
  Output with in loop
  [4,4,4,4,4]
  Output outside of in loop
  [5,5,5,5,5]
~~~

`var` hoisted `i` to the top of the function's scope. The value of `i` by the time of calling the callback of function is printed as a result of the function present with in the array `callbacks`. Now let us use `let` in for loop instead of `var`.

~~~javascript
    let callbacks = [];
    (function() {
    for (let i = 0; i < 5; i++) {
        callbacks.push( function() { return i; } );
        //console.log(callbacks[0]());
        console.log("Output with in loop");
        console.log(callbacks.map( (callback) => callback() ));
    }
    })();
    console.log("Output outside of loop");
    console.log(callbacks.map( (cb) => cb() ));
    //console.log(callbacks[0]());
~~~

`let` has block-scoping behavior. So it stays in the block scope of the loop causing a separate instance of `i` for each iteration. The output of above is :

~~~javascript
  Output with in loop
  [0]
  Output with in loop
  [0,1]
  Output with in loop
  [0,1,2,3]
  Output with in loop
  [0,1,2,3,4]
  Output outside of loop
  [0,1,2,3,4]
  
~~~


