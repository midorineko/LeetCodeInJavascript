/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head
    while(head && head.val === val){
        head = head.next
    }
    let curNode = head;

    while(curNode && curNode.next){
        if(curNode.next.val == val){
            curNode.next = curNode.next.next;
        }else{
            curNode = curNode.next;
        }
    }
    return head
};