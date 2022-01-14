# DSA-JavaScript LinkedList
## [HackerRank - Insert a Node at the Head of a Linked List](https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem)
[Solution Video](https://youtu.be/-L57phD06n8)
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
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data);
    newNode.next = head;
    return newNode;
}
~~~

## [HackerRank - Print the elements of a Linked List](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem)
[Solution Video](https://youtu.be/H_GbXveaZWo)
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
function printLinkedList(head) {
    let node = head;
    while(node != null){
        console.log(node.data);
        node = node.next;
    }
}
~~~
## [HackerRank - Insert a Node at the Tail of a Linked List](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)
[Solution Video](https://youtu.be/BKYZxHeu3qk)
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
## [HackerRank - Insert a node at a specific position in a linked list](https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem)
[Solution Video](https://youtu.be/P4pQGv_gnGc)
~~~ javaScript
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let newNode = new SinglyLinkedListNode(data);
    let node = llist;
    for(let i=1; i<position; i++){
        node = node.next;
    }
    newNode.next = node.next;
    node.next = newNode;
    return llist;
}

~~~
## [HackerRank - Delete a Node at a given position in a linked list](https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem)
Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.
[Solution Video](https://youtu.be/-zPHbgWlbFk)
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

function deleteNode(llist, position) {
    // Write your code here
    let head = llist;
    if(position == 0){
        head = head.next;
        return head;
    }
    while(position > 1){
        head = head.next;
        position--;
    }
    head.next = head.next.next;
    return llist;
}
~~~
