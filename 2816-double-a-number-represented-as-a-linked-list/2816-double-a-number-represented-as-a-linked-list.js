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
var doubleIt = function (head) {
    let val = ''
    while (head != null) {
        val = val + head.val
        head = head.next
    }
    val = BigInt(val)
    val = (val*2n).toString()
    let newNode = new ListNode()
    let curr = newNode
    for (let char of val) {
        curr.next = new ListNode(parseInt(char))
        curr = curr.next
    }
    return newNode.next
};