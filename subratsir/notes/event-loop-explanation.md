The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

Two more details:

1 ) Rendering never happens while the engine executes a task. It doesn’t matter if the task takes a long time. Changes to the DOM are painted only after the task is complete.

2) If a task takes too long, the browser can’t do other tasks, such as processing user events. So after a time, it raises an alert like “Page Unresponsive”, suggesting killing the task with the whole page. That happens when there are a lot of complex calculations or a programming error leading to an infinite loop.

Example : 

```html

<script>
let i = 0;

let start = Date.now();

function count() {

  // do a heavy job
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  alert("Done in " + (Date.now() - start) + 'ms');
}

count();
</script>

<button onClick="alert('Hi')">
Hi Button
</button>

```
  
In above example the button will display on browser after done with the heavy job.
  
Let us modify the above example in such a way that the UI will render with in 10 seconds.
  
```html
<script>
let i = 0;
let part = 1;
let start = Date.now();

function count() {

  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
  	console.log((part++)+"th Part in "+ (Date.now() - start) + 'ms')
    setTimeout(count); // schedule the new call (**)
  }

}

count();
</script>

<button onClick="alert('Hi')">
Hi Button
</button>
  
```
  
In the above example the heavy code is divided into 1000 pieces. Not the first piece will complete with in 10 seconds and the UI will render. Theb rest pieces of the heavy Jon will be done.
  
  
Example:  
  
```js
console.log("First");     // call stack
setTimeout(()=>console.log("Second"));  // Macro Task
Promise.resolve('').then(()=>console.log("Third"));   // Micro Task
console.log("Last")       // Call stack
```

The output of above :

```
"First"
"Last"
"Third"
"Second"
```

Reason:

MacroTask : setTimeout, setInterval, setImmediate
MicroTask : process.nextTick, Promise callback , queueMicrotask

Event Loop Priorities :

1) All functions that are currently in the call stack get executed. When they return a value, they get popped off the stack.
2) When the call stack is empty, all queued up microtasks are popped onto the callstack one by one, and get executed! (Microtasks themselves can also return new microtasks, effectively creating an infinite microtask loop 😬)
3) If both the call stack and microtask queue are empty, the event loop checks if there are tasks left on the (macro)task queue. The tasks get popped onto the callstack, executed, and popped off!

  
## Async/Await

ES7 intruduced Async/Await : A new way of adding Async behaviour in JavaScript.

### Example

```js
const second = () => Promise.resolve('Second');

async function myFun(){
	console.log("First");
  const res = await second();
  console.log(res);
}

console.log("Start");
myFun();
console.log("Last");
```

Output :

```
"Start"
"First"
"Last"
"Second"
```

`console.log('start')` is in execution context, in this case global execution context. First loads to call stack and executes. Then myFun() loads to callStack. `console.log('first')` of myFun() loads to callstack and gets executed. Then encountered `await` keyword. `async` function when encounters `await` keyword, It moves the rest of the function to `microtask queue`. So the rest statement after myFun() `console.log('Last')` loads to call stack and gets executed. When call stack is empty the rest statements of myFunc() loads from `microtask queue` and executes.


