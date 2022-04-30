/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var hasPathSum = function (root, targetSum) {
    let res = [];

    function dfs(node, sum){
        if(node == null)
            return;
        
        // if we hit leaf node then add total sum to res
        if(node.right == null && node.left == null)
            res.push(node.val + sum)

        dfs(node.left, node.val+sum);
        dfs(node.right, node.val+sum);
    }

    dfs(root, 0);

    //see if ans includes target sum
    return res.includes(targetSum);
};

var root = [5,4,8,11,null,13,4,7,2,null,null,null,1]
var targetSum = 22;

console.log(hasPathSum(root, targetSum));