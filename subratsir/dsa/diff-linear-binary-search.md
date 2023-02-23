
✅ 𝗟𝗶𝗻𝗲𝗮𝗿 𝗦𝗲𝗮𝗿𝗰𝗵 
___________________________
- It's Sequeantila search, which scans each element
- Time complexity is O(n)

✅ 𝗕𝗶𝗻𝗮𝗿𝘆 𝘀𝗲𝗮𝗿𝗰𝗵
____________________
- Sort Array
- then find the middle element
- compare it to the target element
- If the target equals the middle element, you have found the target value. Return the index of the middle element and terminate the function.

- If the target is smaller than the middle element, halve the search space by discarding all elements to the right of the middle element and continue the search on its left side because the array is sorted in ascending order. Repeat this step until the target is found.

- If the target is greater than the middle element, halve the search space by discarding all elements to the left of the middle element and continue the search on its right side because the array is sorted in ascending order.
Repeat this step until the target is found.

![](https://firebasestorage.googleapis.com/v0/b/mymasai-school.appspot.com/o/random%2F1676880151018.gif?alt=media&token=a2461f06-e57a-48e1-8b64-18a15931b20a)


source Medium and leetcode
