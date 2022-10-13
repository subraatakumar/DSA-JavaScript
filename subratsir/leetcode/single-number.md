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
