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

const reverseList = (head) =>{
    let prevNode = null;
    while(head != null){
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode
    }
    return prevNode
}

var isPalindrome = function(head) {
    if(!head) return true;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let reverseHead = reverseList(slow.next);
    let currentHead = head;
    while(reverseHead != null && currentHead != null){
        if(reverseHead.val !== currentHead.val){
            return false
        }
        reverseHead = reverseHead.next;
        currentHead = currentHead.next
    }
    return true
};

/* 
The solution builds on reverse linked list and midpoint solver.
First we find midpoint with slow/fast.
We reverse the second half of the linked list. 
Now we run through the first half of the linked list and the reversed second half
and check they are the same.
*/