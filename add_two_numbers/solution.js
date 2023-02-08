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
    let addOne = false;
    let addLastOne = false;
    let p;

    while (l1 !== null || l2 !== null) {
        // checks if both linklists are available and adds them or passes through the applicable number
        if(l1 && l2){
            curVal = l1.val + l2.val
        }else if(!l1 && l2){
            curVal = l2.val
        }else if(l1 && !l2){
            curVal = l1.val
        }

        //checks to make sure linkList isn't already null and checks to see if the next value is null, if it is then sets linkList to null
        if(l1 && l1.next){
            l1 = l1.next;
        }else{
            l1=null;
        }
        if(l2 && l2.next){
            l2 = l2.next;
        }else{
            l2=null;
        }

        //since constraints were 0<=n<=10 I can just use addOne as a boolean to save time, otherwise could set this up as a hash for larger numbers
        if(addOne){
            curVal++;
            addOne = false;
        }

        //simple check to see if both linkedLists are finished and the final value was 10. If it was then we can add a one to then, which with larget numbers I would also use a hash.
        if(!l1 && !l2){
            if(curVal >= 10){
                addLastOne = true;
            }
        }
        
        //sets addOne so we know if we need to add one to the next sum. Must happen after addLastOne as that could cause we manipulate curVal.
        if(curVal >= 10){
            curVal = curVal % 10;
            addOne = true;
        }

        //Adds new nodes to P and we are on the last iteration addLastOne is checked and adds a 1 to the end if necessary.
        //Also want to add that adding listNodes is more difficult than getting them. Everytime we move forward in a linkeddList the original nodes are not maintained in the list.
        //This is why I set p as the overall linkedList which maintains the total linkedList. Then I can submit that. However, we don't use p to increment the nodes, we still use the current generated list.
        if(!p){
            p = (curr = new ListNode(curVal));
        }else{
            curr.next = new ListNode(curVal);
            curr = curr.next;
        }
        if(addLastOne){
            curr.next = new ListNode(1);
            curr = curr.next;
        }

    }
    return(p)
};