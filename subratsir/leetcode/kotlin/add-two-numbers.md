```kt
class ListNode(var `val`: Int = 0) {
    var next: ListNode? = null
}

fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
    var carry = 0
    var dummy = ListNode()
    var current = dummy
    var node1 = l1
    var node2 = l2

    while (node1 != null || node2 != null || carry != 0) {
        var sum = carry

        if (node1 != null) {
            sum += node1.`val`
            node1 = node1.next
        }

        if (node2 != null) {
            sum += node2.`val`
            node2 = node2.next
        }

        carry = sum / 10
        sum %= 10

        current.next = ListNode(sum)
        current = current.next!!
    }

    return dummy.next
}

// Helper function to create a linked list from an array
fun createLinkedList(arr: IntArray): ListNode? {
    var dummy = ListNode()
    var current = dummy

    for (num in arr) {
        current.next = ListNode(num)
        current = current.next!!
    }

    return dummy.next
}

// Helper function to convert a linked list to a list
fun linkedListToList(head: ListNode?): List<Int> {
    val list = mutableListOf<Int>()
    var current = head

    while (current != null) {
        list.add(current.`val`)
        current = current.next
    }

    return list
}

// Test cases
fun main() {
    val l1 = createLinkedList(intArrayOf(2, 4, 3))
    val l2 = createLinkedList(intArrayOf(5, 6, 4))
    val result1 = addTwoNumbers(l1, l2)
    println(linkedListToList(result1)) // Output: [7, 0, 8]

    val l3 = createLinkedList(intArrayOf(0))
    val l4 = createLinkedList(intArrayOf(0))
    val result2 = addTwoNumbers(l3, l4)
    println(linkedListToList(result2)) // Output: [0]

    val l5 = createLinkedList(intArrayOf(9, 9, 9, 9, 9, 9, 9))
    val l6 = createLinkedList(intArrayOf(9, 9, 9, 9))
    val result3 = addTwoNumbers(l5, l6)
    println(linkedListToList(result3)) // Output: [8, 9, 9, 9, 0, 0, 0, 1]
}
```
