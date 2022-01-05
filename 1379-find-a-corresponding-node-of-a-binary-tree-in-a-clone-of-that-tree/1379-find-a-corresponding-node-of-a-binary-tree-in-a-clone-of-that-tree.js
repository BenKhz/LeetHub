/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    var stk = [];
    var stk2= [];
    stk.push(original)
    stk2.push(cloned)
    while(stk.length) {
        var curr = stk.pop()
        var clone = stk2.pop()
        if(curr === target) { return clone; }
        if(curr.left) {
            stk.push(curr.left)
            stk2.push(clone.left)
        }
        if(curr.right) {
            stk.push(curr.right)
            stk2.push(clone.right)
        }
    }
};


