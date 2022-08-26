

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
  
  
