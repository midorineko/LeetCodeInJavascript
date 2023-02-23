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