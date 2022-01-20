/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * 
 */

var swapPairs = function(head) {
    if(!head || !head.next) { // base
        return head
    } else {
        var temp = head.next;
        head.next = swapPairs(temp.next)
        temp.next = head
        return temp;
    }
    
};