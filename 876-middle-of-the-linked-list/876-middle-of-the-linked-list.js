/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var indexedNodes = [];
    while(head) {
        indexedNodes.push(head)
        head = head.next;
    }
    return indexedNodes[Math.ceil((indexedNodes.length-1) / 2)];
    
};