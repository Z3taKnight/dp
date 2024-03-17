/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;
  let maxSum = Number.MIN_VALUE;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let tail = prev;
  while (head !== tail && head && tail) {
    maxSum = Math.max(maxSum, head?.val + tail?.val);
    head = head.next;
    tail = tail.next;
  }

  return maxSum;
};
