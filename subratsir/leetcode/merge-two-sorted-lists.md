https://leetcode.com/problems/merge-two-sorted-lists/

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
   let newList = new ListNode(0);
   let headNode = newList;
   while(list1 != null && list2 != null){
       if(list1.val < list2.val){
           newList.next = list1;
           list1 = list1.next;
       }else{
           newList.next = list2;
           list2 = list2.next
       }
       newList = newList.next
   }
   if(list1 == null){
       newList.next = list2
   }else{
       newList.next = list1
   }

   return headNode.next;
};
```
