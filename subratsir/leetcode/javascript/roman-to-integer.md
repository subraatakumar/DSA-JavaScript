```js
const romanToInt = (s) => {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanValues[s[i]];
        const next = romanValues[s[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++; // Skip the next character since it was already processed
        } else {
            result += current;
        }
    }

    return result;
};

// Test cases
console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("LVIII"));   // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
```