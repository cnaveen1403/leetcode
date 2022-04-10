/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var p = [1, 2, 3],
    q = [1, 2, 3];

var isSameTree = function (p, q) {
    const pValues = getNodes(p);
    const qValues = getNodes(q);

    if(pValues.length !== qValues)
        return false;

    //check each value in the node is same
    for (let index = 0; index < pValues.length; index++) {
        if(qValues[i] !== pValues[i]);
            return false;        
    }
};

const getNodes = (node) =>{
    if(node == null)
        return [null];
    
    const leftValue = getNodes(node.left);
    const rightValue = getNodes(node.right);

    return [node.val, ...leftValue, ...rightValue];
}

console.log(isSameTree(p, q));