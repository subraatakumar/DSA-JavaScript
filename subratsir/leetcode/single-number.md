```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let findings = [];
	for(let i=0; i<nums.length; i++){
    if(findings.indexOf(i) == -1){
      //console.log(findings)
      //console.log(i,nums.lastIndexOf(nums[i]));
      if(nums.lastIndexOf(nums[i]) !== i){
        findings.push(i);
        findings.push(nums.lastIndexOf(nums[i]));
      }else{
        return nums[i];    
      }
    }
	}
  return null;        
};
```

## Optimised Solution

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let findings = 0;
	for(let i=0; i<nums.length; i++){
        findings ^= nums[i]
	}
  return findings;        
};
```

## How it works :

^ (XOR) `caret` is a javascript bitwise operator. Sets each bit to 1 if only one of two bits is 1.

If we use this in decimal numbers, It will result 0 if both the operands are same. In this way it will store the operand which is single and rest all operands which are in pair will be 0.
