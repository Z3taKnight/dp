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
var removeNodes = function (head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let stack = []
    for (let val of arr) {
        while (stack.length > 0 && stack[stack.length - 1] < val) {
            stack.pop()
        }
        stack.push(val)
    }
    let newNode = new ListNode()
    let curr = newNode
    for (let val of stack) {
        curr.next = new ListNode(val)
        curr = curr.next
    }
    return newNode.next
};