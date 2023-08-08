```js
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let maxLength = 0;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }
    
    return maxLength;
}

// Test cases
const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s1));  // Output: 3
console.log(lengthOfLongestSubstring(s2));  // Output: 1
console.log(lengthOfLongestSubstring(s3));  // Output: 3
```