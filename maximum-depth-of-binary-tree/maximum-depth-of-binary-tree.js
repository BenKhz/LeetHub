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
var maxDepth = function(root) {
    const traverse = (node) => {
        var depth = 0;
        if(node === null) { return depth }
        else {
            depth = Math.max(traverse(node.left), traverse(node.right)) + 1;
            return depth    
        }
    }
    return traverse(root);
    
};