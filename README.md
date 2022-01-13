# DSA-JavaScript
## [HackerRank - Insert a Node at the Head of a Linked List](https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem)
[Solution Video](https://youtu.be/wocju7rE2Fk)
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
[Solution Video](https://youtu.be/oXfM-wtPQN0)
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
[Solution Video](https://youtu.be/EChRslq9mgI)
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
## HackerRank - Insert a node at a specific position in a linked list (https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem)
[Solution Video](https://youtu.be/CmzW1j3pywg)
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
