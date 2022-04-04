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

let head = [1, 1, 2, 3, 3]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
    if (!head || !head.next)
        return head;

    var prev = head;
    var curr = head.next;

    while (curr) {
        if (curr.val !== prev.val) {
            prev.next = curr;
            prev = curr;
        }

        curr = curr.next;
    }


    if (prev)
        prev.next = null;

    return head;
};

console.log(deleteDuplicates(head));