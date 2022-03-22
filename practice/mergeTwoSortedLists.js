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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var list1 = [1, 2, 4],
    list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
    let temp = new ListNode (0, null);
    let curr = temp;

    while (list1&&list2){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        }else{
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    if(list1)
        curr.next = list1;

    if(list2)
        curr.next = list2;
        
    return temp.next;
}


console.log(mergeTwoLists(list1, list2))