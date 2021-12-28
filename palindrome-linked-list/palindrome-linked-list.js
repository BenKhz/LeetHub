/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var curr = head;
    var result = [];
    while(curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    var first = result.slice();
    var second = result.reverse()
    return JSON.stringify(first) == JSON.stringify(second) ? true : false;
};