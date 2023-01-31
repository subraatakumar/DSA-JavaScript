find the sum of digits of a number until the sum becomes a single digit

```js
// Write a code to find the sum of digits of a number until the sum becomes a single digit. 5431 => 5 + 4 + 3 + 1 => 13 => 1 + 3 => 4.

const sumDigitsUntilSingleDigit = (no) => {
  
  if (no < 10) {
    return no;
  } else {
    return sumDigitsUntilSingleDigit(no.toString().split('').reduce((a, b) => Number(a) + Number(b), 0))
  }
}

export default sumDigitsUntilSingleDigit;
```
