# DSA-JavaScript

## [HackerRank - Insert a Node at the Tail of a Linked List](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)
~~~javaScript
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data);
    if(head == null){
        return newNode;
    }
    let node = head;
    while(node.next != null){
        node = node.next;
    }
    node.next = newNode;
    return head;
}

~~~
