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
//pretty simple linked list where we move one pointer faster than the other and see if they are ever the same.
//fast will eventually loop around to slow if it never ends, but if it ends we will get out of the while loop and it would be false.
var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head;
    let fast = head.next;
    while(fast.next && fast.next.next){
        if(slow === fast){
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    return false
};