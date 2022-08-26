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

```html
  
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
  
```html
  
In the above example the heavy code is divided into 1000 pieces. Not the first piece will complete with in 10 seconds and the UI will render. Theb rest pieces of the heavy Jon will be done.
  
  
  
  
  
  
