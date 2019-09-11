const sort = (head) => { 
    let current = head, index = null;  
    let temp;        
    if(head == null) {  
        return;  
    } else {  
        while(current != null) {  
            index = current.next;  
            while(index != null) {  
                if(current.data > index.data) {  
                    temp = current.data;  
                    current.data = index.data;  
                    index.data = temp;  
                }  
                index = index.next;  
            }  
            current = current.next;  
        }      
    }  
    return head;
} 

module.exports = sort;