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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const traverse = ( node ) => {
        if(!node) { // If no node, then add nothing and stop recursion.
            return 0;
        }
        else {
            // recurse left and add a level
            var left = traverse(node.left) + 1
            // recurse right and add a level
            var right = traverse(node.right) + 1
            // compare legs and if difference is > 1, break. Else continue with max value.
            if(Math.abs(left - right) > 1) { return Infinity }
            return Math.max(left, right);
        }
    }
    return traverse(root) === Infinity ? false: true
};