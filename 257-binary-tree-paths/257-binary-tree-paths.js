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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const results = [];
    const traverse = (node, path) => {
        var path = path || [];
        path.push(node.val)
        if(!node.left && !node.right) { results.push(path) }
        else {
            if(node.left) { traverse(node.left, [...path]) }
            if(node.right) { traverse(node.right, [...path]) }
        }
    } 
    traverse(root);
    return results.map(path => path.join('->'))
};