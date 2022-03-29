function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

var addTwoNumbers = function (l1, l2) {
    let curr = new ListNode (0, null);
    let resultList = curr;
    var rem = 0;
    let digits = 0;

    while(l1 || l2){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rem;
        digits = sum % 10;
        rem = Math.floor(sum/10);
        
        curr.next = new ListNode(digits);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    if(rem > 0)
        curr.next = new ListNode(rem);

    return resultList.next;
};

console.log(addTwoNumbers (l1, l2));