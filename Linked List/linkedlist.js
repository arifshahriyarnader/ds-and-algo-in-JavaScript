class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    //Insert Node
    insertFirst(data){
       if(!this.head){
           return  this.head =new Node(data)
       }
       //node traverse
       let current = this.head;
       while(current.next){
           current = current.next;
       }
       current.next = new Node(data);
    }

    //Print List
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
           current = current.next;
        } 
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
ll.printListData();

