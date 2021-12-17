//from leetcode 24. swap nodes challenge
var swapPairs = function(head) {
    let L1 = head
    let L2 = head
    let a = head
    let b = head
    if(head == null){
        return head
    } else if(head.next !== null && head.next.next !== null){
        L2 = L1.next
        head = L2
            while(b !== null){
                if(b.next !== null && L1 !== null){
                    L2 = L1.next
                    b = L1.next.next.next
                    a = L1.next.next
                    L2.next = L1
                    L1.next = b
                    L1 = b.next
                    L2 = b.next
                    b.next = a
                    a = L1
                } else if(L1 !== null){
                    L2 = L1.next
                    a = L1.next.next
                    b = L1.next.next
                    L2.next = L1
                    L1.next = b
                    L1 = b.next
                    L2 = b.next
                    b.next = a
                    a = L1
                } else {
                    return head
                }     
        }
        return head
    }
    return head
};