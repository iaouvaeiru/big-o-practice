// finding a cycle loop in a linked list
function hasCycle(head){
    let L1 = head
    let L2 = head
    if(head === null){
        return false
    } else if(L2.next !== null && L2.next.next !== null){
        L1 = head.next
        L2 = head.next.next
        while(L1 !== L2){
            if (L2 !== null && L2.next !== null){
                L1 = L1.next
                L2 = L2.next.next
            } else {
                return false
            }
            
        }
        return true
    }
    return false
}