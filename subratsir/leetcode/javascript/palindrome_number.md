```js
function isPalindrome(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false; // Negative numbers and numbers ending with 0 are not palindromes
    }

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // For even-length numbers, x and reversedHalf will have the same number of digits.
    // For odd-length numbers, reversedHalf will have one more digit than x.
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
```

If you are allowed to convert to string then you can follow the below solution.

```js
var isPalindrome = function(x) {
    x = ""+x;
    let left = 0;
    let right = x.length - 1;
    while(left <= right){
        if(x[right] !== x[left]) return false;
        left++; 
        right--;
    }
    return true;
};
```