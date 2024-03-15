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
  while (current2 !== null) {
    prev = current1;
    current1 = current1.next;
    current2 = current2.next;
    if (current2 !== null) {
      current2 = current2.next;
    } else current2 = null;
  }
  prev.next = current1.next;
  return head;
};
