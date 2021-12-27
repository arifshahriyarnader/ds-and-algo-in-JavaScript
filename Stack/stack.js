class Stack{
    constructor(){
        this.items =[]
        this.count = 0;
    }
    //Add Element to top of the Stack
    push(element){
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`)
        this.count += 1;
        return this.count -1;
    }

    //Remove Element to top of the Stack
    pop(){
        if(this.count == 0)
        return undefined
        let deleteItem = this.items[this.count -1]
        this.count -= 1;
        console.log(`${deleteItem} removed`)
        return deleteItem;
    }
    
    //Check Top Element in Stack
    peek(){
        console.log(`Top Element is ${this.items[this.count -1]}`)
        return this.items[this.count-1]
    }

    //Check if Stack is Empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is Not Empty')
        return this.count == 0;
    }

    //Check Size of Stack
    size(){
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    //print elements in stack
    print(){
        let str=''
        for(let i =0; i < this.count; i++){
            str += this.items[i] + ' '
        }
        return str;
    }
}

const stack = new Stack();
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)
stack.pop()
stack.peek()
stack.isEmpty()
stack.size()
console.log(stack.print())