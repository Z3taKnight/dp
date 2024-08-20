/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let arr = []
    while (list1 != null) {
        arr.push(list1.val)
        list1 = list1.next
    }
    while (list2 != null) {
        arr.push(list2.val)
        list2 = list2.next
    }
    arr = arr.sort((a, b) => a - b)
    let head = new ListNode()
    let curr = head
    for (let elem of arr) {
        curr.next = new ListNode(elem)
        curr = curr.next
    }
    return head.next
};