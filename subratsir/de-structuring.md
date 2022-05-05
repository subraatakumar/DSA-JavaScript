# What is destructuring ?

Destructuring makes it easy to extract only what is needed from an array or object.

```js
const vehicles = ['vehicle1Name', 'vehicle2Name', 'vehicle3Name'];

// old way
const car = vehicles[0];
const suv = vehicles[2];
// new way
const [car,, suv] = vehicles;
```

```js
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  const modulus = a % b;

  return [add, subtract, multiply, divide, modulus];
}

const [add, subtract, multiply, divide, modulus] = calculate(3, 5);
```

