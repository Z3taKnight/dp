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
var oddEvenList = function (head) {
  let oddNode = head;
  let evenNode = (head && head.next) || null;
  let indexNode = (head && head.next) || null;
  while (evenNode && evenNode.next) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }
  if (oddNode) oddNode.next = indexNode;
  return head;
};
