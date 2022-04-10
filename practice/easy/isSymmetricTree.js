/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function checkIfSymmetric(node1, node2) {
        if (node1 == null && node2 == null)
            return true;

        if (!node1 || !node2)
            return false;

        return node11.val === node2.val && checkIfSymmetric(node1.left, node2.right) && checkIfSymmetric(node1.right, node2.left)
    }

    return !!root && checkIfSymmetric(root.left, root.right);
};

var root = [1, 2, 2, 3, 4, 4, 3];
console.log(isSymmetric(root));