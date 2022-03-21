class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    //data insert
    insertData(data){
        if(!this.head){
            return this.head = new Node(data)
        }
        //node traverse
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(data);
    }

    //print List 
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
const list = new LinkedList();
list.insertData(10);
list.insertData(20);
list.insertData(30);
list.printList();

