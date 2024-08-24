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
var deleteMiddle = function (head) {
    let prev = null;
    let current1 = head,
        current2 = head;
    let len = 0
    while (current2 !== null) {
        len += 1
        current2 = current2.next;
        if (current2 !== null) {
            len += 1
            prev = current1;
            current1 = current1.next;
            current2 = current2.next;
        } else current2 = null;
    }
    if (len == 1) return null
    else {
        if (current1 != null && prev?.next != null)
            prev.next = current1.next;
        return head;
    }
};