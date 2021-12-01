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
var isSymmetric = function(root) {
    const compare = (side1, side2) => {
        if(!side1 || !side2) { 
            return !side1 && !side2;
        }
        return side1.val === side2.val && 
            compare(side1.left, side2.right) &&
            compare(side1.right, side2.left);
    }
    return compare(root.left, root.right)
};