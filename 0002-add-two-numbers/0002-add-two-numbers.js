/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1String = ''
    let l2String = ''
    while (l1 != null) {
        l1String += l1.val
        l1 = l1.next
    }
    while (l2 != null) {
        l2String += l2.val
        l2 = l2.next
    }
    l1String = l1String.split('').reverse().join('')
    l2String = l2String.split('').reverse().join('')
    let newNum = BigInt(l1String) + BigInt(l2String)
    newNum = newNum.toString().split('').reverse()
    let head = new ListNode(newNum[0], null)
    let currentNode = head
    for (let i = 1; i < newNum.length; i++) {
        currentNode.next = new ListNode(newNum[i], null)
        currentNode = currentNode.next
    }
    return head
};