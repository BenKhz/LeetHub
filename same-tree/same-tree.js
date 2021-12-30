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
var isSameTree = function(p, q) {
    const dfs = (node) => {
        if(!node) { return [null] }
        else { return [node.val].concat(dfs(node.left), dfs(node.right))}
    }
    const isEqual = (arr1, arr2) => {
        if(arr1.length !== arr2.length) {return false}
        return JSON.stringify(arr1) === JSON.stringify(arr2)
    }
    return isEqual(dfs(p), dfs(q))
};