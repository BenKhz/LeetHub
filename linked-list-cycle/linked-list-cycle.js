/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) { return false }
    var [curr, next] = [head, head.next]
    while(curr.next) {
        if(curr.visited) { return true }
        else {
            curr.visited = 'visited';
            [curr, next] = [curr.next, next.next]
        }
    }
    return false
};