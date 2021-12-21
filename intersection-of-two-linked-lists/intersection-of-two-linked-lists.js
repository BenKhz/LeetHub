/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
        // Create a uniq visited storage
        var visited = new Set()
        while (headA || headB) {
            // iterate through both lists and find first common node.
            if(headA) { 
                if (visited.has(headA)) { return headA }
                visited.add(headA)
                headA = headA.next;
            }   
            if(headB) { 
                if(visited.has(headB)) { return headB }
                visited.add(headB)
                headB = headB.next;
            }
        }
        return null
    };