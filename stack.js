// create a Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if(this.top === null) return -1;

        let temp = this.top;
        this.top = temp.next;
        return temp.val;
    }

}

let stack = new Stack();
console.log(stack.pop());
stack.push(4);
stack.push(5);
console.log(stack.pop());

console.log(stack);