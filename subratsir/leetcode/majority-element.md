

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  if (l % 2 === 0) {
    return nums[l / 2]
  } else {
    return nums[(l - 1) / 2]
  }
};  
```

### How it works:

As the question says that the majority element appears more than [n/2] times. It means if we sort the array the majority element will be the middle one.
