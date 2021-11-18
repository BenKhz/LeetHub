/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
// Get length of LL, min size of each new part, and number of remainders.
    const getLength = (head) => { 
        curr = head;
        var count = 1;
        while(curr) {
            count++;
            curr=curr.next;    
        }
        return count;
    };
    var origLength = getLength(head)
    var partLength = Math.floor(origLength / k )
    var partLengthRemain = (origLength % k)
    
// Helper to partition and LL and returning second partitions new head
    const partition = (head, length) => {
        if (!head) { return null;}
        var length = length;
        if(partLengthRemain > 1) {
            length = length + 1;
            partLengthRemain--;
        }
        if(!length) { return null;}
        var [curr, next] = [head, head.next];
        length--;
        while(length && next) {
            curr=curr.next
            next=curr.next;
            length--;
        }
        var nextHead = next;
        curr.next = null;
    // RETURN nextHead
        return nextHead;
    }
    var result = [head];
    while(k>1){
        result.push(partition(result[result.length-1], partLength));
        k--;
    }
    //TEST BEHAVIOR Below:
    return result
};