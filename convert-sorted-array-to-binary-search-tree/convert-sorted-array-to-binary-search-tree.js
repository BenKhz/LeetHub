/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(n) {
    var m = Math.floor(n.length/2)
    return n.length === 0 ? null :
        new TreeNode(n[m], sortedArrayToBST(n.slice(0, m)),                   sortedArrayToBST(n.slice(m+1)));
};