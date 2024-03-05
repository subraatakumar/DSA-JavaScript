find the sum of digits of a number until the sum becomes a single digit

## Answer 1

```js
function getSingleDigitSum(number) {
    // Function to calculate the sum of digits of a number
    function calculateDigitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Calculate the initial sum of digits
    let sum = calculateDigitSum(number);

    // Continue until the sum becomes a single digit
    while (sum >= 10) {
        sum = calculateDigitSum(sum);
    }

    return sum;
}

// Example usage
const inputNumber = 5431;
const result = getSingleDigitSum(inputNumber);
console.log(`The single-digit sum of ${inputNumber} is: ${result}`);
```

## Answer 2: Using Reduce

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

### Ansewr 3: Using reduce and ternary operator

```js
const getSingleDigitSum = num => num < 10 ? num : getSingleDigitSum([...num.toString()].map(Number).reduce((a, b) => a + b, 0));

// Example usage
const inputNumber = 5431;
const result = getSingleDigitSum(inputNumber);
console.log(`The single-digit sum of ${inputNumber} is: ${result}`);
```

```
