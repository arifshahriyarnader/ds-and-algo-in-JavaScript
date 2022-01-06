class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    isEmpty(){
        return !this.front;
    }

    enqueue(value){
        console.log('ENQUEUE', value);
        //Create a new node with value
        let node = new Node(value);
        //if queue is empty
        if(this.isEmpty()){
            //point front and rear to new node
            this.front = this.rear = node;
        }
        //else the queue is not empty
        else{
            //push node to rear of the queue
            //by pointing the last node to the newly created node
            this.rear.next = node;
            // move back pointer to new node
           this.rear = node;
        }
        this.print();
    }
    print(){
        //if the queue is empty
        if(this.isEmpty()){
            console.log('Empty Queue');
        } 
        //Else it's not empty
        else{
            //temp arr
            let tempArr= []
            //temp variable to the front of the queue
            let temp = this.front;
            //iterate through the queue
            while(temp){
                //add value into tmp arr
                tempArr.push(temp.value);
                //move to the next element
                temp = temp.next;
            } 
            //print the values
            console.log(tempArr.join(','));   
        }
    }
    dequeue(){
        //pointer to front of the queue
        let node = this.front;
        console.log('DEQUEUE', node ? node.value : '');
        //if queue is not empty
        if(!this.isEmpty()){
            //move front to the next element
            this.front = this.front.next;
        }
        //check if front is null / past the end of the queue
        if(!this.front){
             //set back to null
             this.back = null;
        } 
        //print
        this.print();
        //return node front of the queue
        return node;

    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.dequeue();
q.dequeue();
 
