/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let arr = []
    while (head != null) {
        arr.push(head.val)
        head = head.next
    }
    let curr = new ListNode()
    let n = curr
    if (arr.length == 1) {
        curr.next = new ListNode(arr[0], null)
        return curr.next
    }
    let len = 0
    for (let i = 0; i < arr.length - 1; i += 2) {
        len += 2
        curr.next = new ListNode(arr[i + 1], new ListNode(arr[i], null))
        curr = curr.next.next
    }
    if (len != arr.length) curr.next = new ListNode(arr[arr.length - 1])
    return n.next
};