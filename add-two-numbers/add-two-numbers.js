/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let curr = head;
    let carry = 0;
    let [p, q] = [l1, l2];
        while( p != null || q != null) {
            let x = p != null ? p.val : 0;
            let y = q != null ? q.val : 0;
            let sum = carry + x + y;
            if(sum > 9) {
                carry = 1;
                sum -= 10;
            } else {
                carry = 0;
            }
            curr.next = new ListNode(sum);
            curr = curr.next;
            if(p != null) { p = p.next; }
            if(q != null) { q = q.next; }
        }
    if(carry) {
        curr.next = new ListNode(carry)
    }
    // return "next" of our initial dummy head to get the actual head.
    return head.next;
    }
