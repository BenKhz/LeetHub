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
 * @return {number}
 */
var minDepth = function(root) {
    const traverse = (node) => {
        if(!node) { return 0; }
        if(!node.left) { return traverse(node.right) + 1; }
        if(!node.right) { return traverse(node.left) + 1; }
        return Math.min(traverse(node.left), traverse(node.right)) + 1 
    }
    return traverse(root)
};