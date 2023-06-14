// create a Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/*

// create a main class LinkedList 
class LinkedList {

    constructor() {
        this.head = null;
    }

    append(value){
        // if list is empty ( edge case )
        if(this.head === null){
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next= new Node(value);
    }

    print() {
        let str = '';
        let current = this.head;
        while(current != null){
            str += current.val + "->"
            current = current.next;
        } 
        console.log(str);
    }

    contains(target) {
        // point to the head of the list
        let current = this.head;
        while(current != null) {
            if(current.val === target){
                return true;
            }
            current = current.next;
        }
        return false; // only returns false when we check from start to end of the list
    }

}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

list.print();

console.log(list.contains('a')); // true
console.log(list.contains('b')); // true
console.log(list.contains('x')); // false
console.log(list.contains('y')); // false


*/


// let nodeA = new Node("a");
// let nodeB = new Node("b");
// let nodeC = new Node("c");
// let nodeD = new Node("d");
// let nodeE = new Node("e");

let nodeA = new Node("b");
let nodeB = new Node("b");
let nodeC = new Node("b");
let nodeD = new Node("b");
let nodeE = new Node("e");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

// iterative version Time: O(N) Space : O(N)
const printNodeValues = (head) => {
    let current = head;
    while(current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

printNodeValues(nodeA);

// recursive version 

// const printNodeValuesUsingRecursion = (head) => {
//     let results = [];
//     const values = fillValues(head, results);
//     console.log(values);
//     values && values.forEach((item) => console.log(item + " -> "));
// }

// const fillValues = (head, results) => {
//     if(head === null) return results;
//     results.push(head.val);
//     fillValues(head.next, results);
// }

// Notes:- Calling recursion in separate fn helps in not initialize array everytime otherwise Time: O(N)

// const printNodeValuesUsingRecursion = (head) => { 
//     if(head === null) return;
//     console.log(head.val);
//     printNodeValuesUsingRecursion(head.next);
// }

// // printNodeValues(nodeA);
// printNodeValuesUsingRecursion(nodeA);



const getMiddle = (node) => {
    let current = node;
    if(current === null) return -1;

    let count = 0;
    while(current !== null) {
        count++;
        current = current.next;
    }

    let mid;
    if(count % 2 === 0) {
        mid = count / 2 + 1;
    } else {
        mid = count / 2;
    }

    current = node;
    for(let i = 0; i < mid - 1; i++) {
        current = current.next;
    }

    return current.val;
}

// console.log(getMiddle(nodeA));

// attempt above question with slow and fast pointer ( 2-pointer alogorithm)

//Function to find the data of nth node from the end of a linked list
function getNthFromLast(head, n){
    let current = head, temp = head;
    if(current === null) return -1;
    let count = 0;
    while(current !== null) {
        count++;
        current = current.next;
    }
    
    let targetIndex = count - n;
    if(targetIndex < 0)  return -1;

    // for(let i = 0; i < targetIndex; i++){
    //     temp = temp.next;
    // }

    while(targetIndex--) {
        temp = temp.next;
    }
    return temp.val;
}

// console.log(getNthFromLast(nodeA, 2));

// 2 pointer Algorithm - increase the speed of 2nd pointer twice the 1st pointer approach
function detectLoop(head)
{
    //your code here
    if(head === null) return false;

    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast)
            return true;
    }
    
    return false;
    
}

// delete node without head pointer

function deleteNode(del) {
    let prev = del;
    prev.val = del.next.val;
    del = del.next;

    prev = del.next;
    del.next = null;
}

// deleteNode(nodeD);
// printNodeValues(nodeA);

function pairWiseSwap(node) {
    //your code here
    if(node === null || node.next === null) return node;

    let current = node.next.next; 
    let prev = node; // node = head

    node = node.next; // move head to the second node
    node.next = prev; // point the next of head to prev node

    while(current != null && current.next != null) {

        prev.next = current.next;
        prev = current;

        let temp = current.next.next;
        current.next.next = current;
        current = temp;
    }

    // edge case where only a single node left or no node available
    prev.next = current;

    return node;
}

console.log("\n Next Print \n");
// pairWiseSwap(nodeA);
// printNodeValues(nodeA);



// remove dupplicates from the list

function removeDuplicates(head) {

    if(head === null ) return null; 
    let current = head;
    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

// remove duplicates completely from list --
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

function removeDuplicatesCompletely(head) {

    if(head === null || head.next === null) return head; 
    let current = head, prev = null;
    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {

            while(current.next !== null && current.val === current.next.val) {
                current = current.next;
            }

            if(prev !== null) {
                prev.next = current.next;
                current = current.next;
            } else {
                head = current.next;
                current = current.next;
            }
        } else {
            prev = current;
            current = current.next;
        }
    }
    return head;
}



// console.log(removeDuplicates(nodeA));
console.log(removeDuplicatesCompletely(nodeA));