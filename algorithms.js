//W DATA STRUCTURES AND ALGORITHMS CLASS



//const nemo = ['nemo'];
//const everyone = ['dory', 'bruce','marlin','gill','nemo', 'bloat','nigel','squirt','darla','hank'];

//const largeArray= new Array(100).fill('nemo');

//? This function has a big O notation of O(n) --> LINEAR TIME
function findNemo(array) {
    for (let i = 0; i < array.length; i++){
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;  
        }
    }
}

//findNemo(everyone);  


//?Big O notation of O(1) --> CONSTANT TIME
//const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(logFirstTwoBoxes){
    console.log(boxes[0]);
    console.log(boxes[1]);
}

//logFirstTwoBoxes(boxes);


//# BIG O EXERCISE 1
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) { //O(n) n is the input
        anotherFunction(); //O(n)
        let stranger = true;    //O(n)
        a++; //O(n)
    }
    return a;  //O(1) because return statement only runs once
}

// BIG O(3 + 4n) because there were 3 O(1) and 4 O(n)   
//funChallenge(1);


//# What is the Big O of the below function? (Hint, you may want to go line by line) EXERCISE 2
function anotherFunChallenge(input) {
    let a = 5;  //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) {  //O(n)
      let x = i + 1;//O(n)
      let y = i + 2;//O(n)
      let z = i + 3;//O(n)
  
    }
    for (let j = 0; j < input; j++) {//O(n)
      let p = j * 2;//O(n)
      let q = j * 2;//O(n)
    }
    let whoAmI = "I don't know"; //O(1)
  }

  // BIG O O(4 + 7n) or O(n) if we include the nested functions 

//# MAKE SURE TO ASK IF THEY WANT ME TO COUNT VARIABLE ASSIGNMENT IN BIG O NOTATION IF THEY MAKE ME TELL THEM WHAT THE BIG O IS
//W BIG O RULES
// 1. What is the worst case scenario? 
        // Your find element could be at the end of the array. 
// 2. DROP THE CONSTANTS 
        // EX: if my BIG O is O(9n + 1000) i can drop the constants and it will be O(n)

// 3. Different terms for inputs
        //EX:
  /* 
    function compressBoxesTwice(boxes, boxes2) {
        boxes.forEach(function(boxes){
            console.log(boxes);
        });
        boxes2.forEach(function(boxes){
            console.log(boxes);
        });
    }
    O(a + b) because there are two different inputs
  */
// 
//W LOG ALL PAIRS OF AN ARRAY NESTED LOOP

//const letters = ['a','b','c','d','e'];

function logAllPairsofArray(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++) {
            //console.log(array[i], array[j])
        }
    }
}

//logAllPairsofArray(letters);
// BIG O Notation is O(n^2) because we multiply nested for loops O(n) * O(n) = O(n^2)



//const numbers = [1,2,3,4,5,6,7,8,9,10];

function printNumbers(numbers){
    console.log("List of Numbers:");
    numbers.forEach(function(number){
        console.log(number)
    });
}
//printNumbers(numbers);


//W SPACE COMPLEXITY Example

function spaceComp(n){
    for(let i = 0; i < n.length; i++){
        console.log('booooo!');
    }
}

//spaceComp([1,2,3,4,5]); //* Space Complexity of O(1)

function arrayOfNTimes(n){
    let nArray = [];
    for (let i = 0; i < n; i++){
        nArray[i] = 'hello';
    }
    return nArray;
}

//console.log(arrayOfNTimes(8));  //* space complexity of O(n) because we created a new variable;



//W TWITTER EXERCISE    
//# Find the 1st and find Nth... (Most recent and Oldest Tweets)
const tweetArray = ['hi','my','dog', 'is', 'hazel']
function twitterExercise(e){
    firstLastTweets = [];
    firstLastTweets.push(e[0]);  //O(1)
    firstLastTweets.push(e[e.length-1]); //O(1)       
    return firstLastTweets;
}
//console.log(twitterExercise(tweetArray));

//# Now find the 1st and Nth... (Most recent and oldest tweets) and compare their dates.
const tweetArrayWithDates = [
    {tweet:'hi',
    date: 2022},
    {tweet:'my',
    date: 2021},
    {tweet:'name',
    date: 2020},
    {tweet:'is',
    date: 2019},
    {tweet:'justin',
    date: 2018},
];

function tweetDateCompare(e){
    dateComparison
}


//# DIFFERENT WAYS TO DO A LOOP IN JAVASCRIPT

function loop1(array) {
    for (let i = 0; i < array.length; i++){
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;  
        }
    }
}
const loop2 = array => {
    array.forEach(fish =>{
        if(fish === 'nemo'){
            console.log('Found Nemo');
        }
    })
}
const loop3 = array => {
    for (let fish of array){
        if(fish === 'nemo'){
            console.log('Found Nemo');
        }
    }
}



//# GOOGLE INTERVIEW EXERCISE
/* 
Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
For example:
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
Should return false
----------
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
Should return true
*/

//W FIRST DETERMINE THE BIG O ====> O(n^2):
//W The big O is O(n^2) because we are comparing two different arrays to each other.

//? FALSE TEST
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']

//? TRUE TEST
const array3 = ['a', 'b', 'c', 'x']
const array4 = ['z', 'y', 'x']

function commonItem(array1,array2){
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                return true;
            }
        }
    }
    return false;
} //O(a*b) TIme Complexity
//O(1)  Space Complexity

//*console.log(`The first test returns ${commonItem(array1, array2)}`);
//*console.log(`The second test returns ${commonItem(array3, array4)}`);



//# DIFFERENT SOLUTION MORE TIME EFFICIENT because it is not looping through entire second array for each item in first array.
//? O(a+b) time complexity is a lot smaller than O(a*b)   
//W In order to break the code we must exclude a second parameter or make the second parameter equal to null
let commonElement = (array1, array2) => {
    //first loop through first array and create object where properties == items in the array
    let map = {};
    for (let i = 0; i < array1.length; i++){
        if(!map[array1[i]]){
            const item = array1[i];
            map[item] = true;
        }
    }
    //loop through second array and check if item in second array exists on created object
    for (let j = 0; j < array2.length; j++){
        if(map[array2[j]]){
            return true;
        }
    }
    return false;
} //O(a + b) Time Complexity Better
//O(a) Space Complexity heavier than first function because O(a) > O(1)
//console.log(commonElement(array3,array4));


//# MOST EFFICIENT WAY USING JAVASCRIPT METHODS and is MORE READABLE
let efficientCommonItem = (array1, array2) => {
    return array1.some(item => array2.includes(item))
}

//console.log(efficientCommonItem(array3, array4));


//W CONSTRUCTING AN ARRAY
class myArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index)  {
        return this.data[index]
    }

    push(item){ 
        this.data[this.length] = item;
        this.length++
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){
        for (let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}
// const newArray = new myArray();
// newArray.push('hello')
// newArray.push('you')
// newArray.push('Jessica');
// newArray.delete(1);
//console.log(newArray);





//W REVERSE A STRING: EX: justin, returns 'nitsuj'

let myString = 'Hello, my name is Justin and I am 22 years old.';

//# j   u   s   t   i   n
//# 0   1   2   3   4   5

const reversedString = (string) => {
    let reverse = [];
    if(!string || string.length < 2 || typeof string !== 'string'){
        return 'Something is wrong here!';
    }
    for (i = string.length-1; i >= 0; i--){
        reverse.push(string[i]);
    }
    //console.log(reverse.join(''));
}

// reversedString(myString);

//# ORRRR using Javascript methods
// const reverseString2 = (string) => {
//     return string.split('').reverse().join('');
// }
//console.log(reverseString2(myString));


//# One line ES6 function
// const reverse3 = str => str.split('').reverse().join('');
//console.log(reverse3(myString));


//W   Merge and SORT 2 arrays

sorted1 = [9, 10, 43, 3, 11, 0, 5]
sorted2 = [100, 2, 1, 4, 6, 93]
mergeAndSort = (array1, array2) =>{
    mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
}

//console.log(mergeAndSort(sorted1, sorted2));

//W HASH TABLES  CALLED OBJECTS IN JAVASCRIPT

let user = {
    age: 23,
    name: 'Justin',
    job: 'Engineer',
    location: 'Los Angeles, CA',
    greet: function(){
        return `Hello my name is ${this.name}`;
    }
}
//console.log(user.greet()); //O(1)

// user.nationality = 'Mexican-American'; //O(1)
//console.log(user); 

//*  THE MAIN PROBLEM WITH HASH TABLES: 

//? MAKING MY OWN HASH TABLE CLASS (Object)

class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }

    keys(){
        const keysArray = []; 
        for (let i=0; i < this.data.length; i++){
            if (this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
  }
  
//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')

//console.log(myHashTable.keys());


/*
# GOOGLE INTERVIEW QUESTION 
* Given an array = [2,5,1,2,3,5,1,2,4]:
* It should return 2

* Given an array = [2,1,1,2,3,5,1,2,4]:
* It should return 1

* Given an array = [2,3,4,5]:
* It should return undefined
*/
// FIRST SOLUTION THAT COMES TO MIND, NESTED FOR LOOPS. Time Complexity of O(n^2) and space complexity of O(1)
const firstDuplicateNum = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]){
                return array[i];
            }
        }
    }
    return undefined;
}

arrayDuplicates = [1,5,0,3,4,7,2,9,0,6,72];
//console.log(firstDuplicateNum(arrayDuplicates));
    

// SECOND SOLUTION HAS A SMALLER TIME COMPLEXITY O(n) but now has a space complexity O(n) as well 
//* This solution is best because if we had [2,5,5,2,3,5,1,2,4] the first solution would still return 2 as the first recurring character. This solution will return 5, the correct answer.
const firstDuplicateNum2 = (array) => {
    let map = {};
    for (let i = 0; i < array.length; i++){
        if(map[array[i]] !== undefined){
            return array[i];
        }else{
            map[array[i]] = i
        }
    }
    console.log(map);
    return undefined;
}

//console.log(firstDuplicateNum2(arrayDuplicates));



//W LINKED LIST (3RD DATA STRUCTURE);

//const basket = ['apples', 'grapes', 'pears'];

//* linked list: apples --> grapes --> pears

/* EXAMPLE DIAGRAM: 
apples
8742 --> grapes
          8420 --> pears
                    831 --> null;
*/

let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value){
        //Check your parameters
        if (index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const deletedNode = leader.next;
        leader.next = deletedNode.next;
        this.length --;
        return this.printList();
    }
}

// const myLinkedList2 = new LinkedList(10);
// myLinkedList2.append(5);
// myLinkedList2.append(16);
// myLinkedList2.append(16);
// myLinkedList2.append(54);
// myLinkedList2.append(21);
// myLinkedList2.append(82);
// myLinkedList2.prepend(1);
// myLinkedList2.prepend(69);
// myLinkedList2.insert(7, 54212);
//console.log(myLinkedList2.printList());
//console.log(myLinkedList2.remove(2));
/*
if (index === 0) {
  this.prepend(value);
  return this.printList();
}
*/

//W DOUBLE LINKED LISTS (4TH DATA STRUCTURE)

class DoubleNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new DoubleNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }
    prepend(value){
        const newNode = new DoubleNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length ++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value){
        //Check your parameters
        if (index >= this.length){
            return this.append(value);
        }
        const newNode = new DoubleNode(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const deletedNode = leader.next;
        leader.next = deletedNode.next;
        deletedNode.next.prev = leader;
        this.length --;
        return this.printList();
    }
    reverse(){
        if (!this.head.next){
            return this;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const third = second.next;
            second.next = first;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}


// const myLinkedList3 = new DoublyLinkedList(10);
// myLinkedList3.append(5);
// myLinkedList3.append(16);
// myLinkedList3.printList();
// myLinkedList3.append(26);
// myLinkedList3.printList();
// myLinkedList3.prepend(69);
// myLinkedList3.printList();
// myLinkedList3.remove(1);
// myLinkedList3.append(70);
 //console.log(myLinkedList3.printList());
 //console.log(myLinkedList3.reverse());

// const myLinkedList4 = new DoublyLinkedList(1);
// myLinkedList4.append(2);
// myLinkedList4.append(3);
// myLinkedList4.append(4);
// myLinkedList4.append(5);
//console.log(myLinkedList4.printList());
//console.log(myLinkedList4.reverse());


//W STACKS AND QUEUES (5TH AND 6TH DATA STRUCTURES (LINEAR DATA STRUCTURES))
//*STACKS Can be build with arrays or linked lists 
//STACK with a linked list
class StackNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        let newStackElem = new StackNode(value);
        if (this.length === 0){
            this.top = newStackElem;
            this.bottom = newStackElem;
        }else {
            let topHolder = this.top;
            this.top = newStackElem;
            this.top.next = topHolder;
        }
        
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if (this.top === this.bottom){
            this.bottom == null;
        }
        const topHolder = this.top;
        this.top = this.top.next;
        this.length --;
        return topHolder;
    }
}

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);``
// myStack.pop();
//console.log(myStack);


//STACK WITH ARRAY
class StackNodeArr {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class StackArray {
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}

// const myStackArray = new StackArray();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);``
// myStack.pop();
// myStackArray.push("Hello");
//console.log(myStackArray);

//*QUEUES You always want to implement them with linked lists because with an array you will have to shift everything over once you remove a data element

class qNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        let newQNode = new qNode(value);
        if (this.length === 0){
            this.first = newQNode;
            this.last = newQNode;
        }
        else{
            this.last.next = newQNode;
            this.last = newQNode;
        }
        this.length ++;
        return this;
    }
    dequeue(){
        if (!this.first){
            return null;
        }
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length --;
        return this;
    }
}

// let myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
//console.log(myQueue.dequeue());


//QUEUE USING A STACK
class stackQueue {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
      }
      this.last.push(value);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
    }
    peek() {
      if (this.last.length > 0) {
        return this.last[0];
      }
      return this.first[this.first.length - 1];
    }
  }

//   const sQue = new stackQueue();
//   sQue.peek();
//   sQue.enqueue('Joy');
//   sQue.enqueue('Matt');
//   sQue.enqueue('Pavel');
//   //console.log(sQue);
//   sQue.dequeue();


//W BINARY TREE (DATA STRUCTURE)

class bNode {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }

class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new bNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return null
    }
    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
    }
}
  
//   const tree = new BinarySearchTree();
//   tree.insert(9)
//   tree.insert(4)
//   tree.insert(6)
//   tree.insert(20)
//   tree.insert(170)
//   tree.insert(15)
//   tree.insert(1)
//   tree.insert(525)
//   tree.insert(14)
//   tree.insert(3)
  // JSON.stringify(traverse(tree.root))
//   tree.lookup(15);
//   console.log(tree.remove(1));

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null? null:
        traverse(node.left);
    tree.right = node.right === null ? null:
        traverse(node.right);
        return tree;
}


//W GRAPHS (DATA STRUCTURE)

//EDGE LIST
const edgeGraph = [[0,2], [2,3], [2,1], [1,3]]

//Adjacent List
const adjGraph = [[2], [2,3], [0,1,3], [1,2]]

//Adjacent Matrix
const adjMatrix = [
    [0, 0, 1, 0],  // Node 0 has connection to "2"
    [0, 0, 1, 1], // Node 1 has connections to "2 and 3"
    [1, 1, 0, 1], // Node 2 has connections to "1, 3 and 0"
    [0, 1, 1, 0] // Node 3 has connections to "1 and 2"
]

class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {}
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes ++;
    }
    addEdge(node1, node2){
        //? Undirected Graph ->  WE HAVE TO DO IT BOTH WAYS BECAUSE IT IS AN UNDIRECTED GRAPH AND THE CONNECTION GOES BOTH WAYS
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() { 
        const allNodes = Object.keys(this.adjacentList); 
        for (let node of allNodes) { 
            let nodeConnections = this.adjacentList[node]; 
            let connections = ""; 
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            } 
            console.log(node + "-->" + connections); 
        } 
    }
}

// const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3','1');
// myGraph.addEdge('3','4');
// myGraph.addEdge('4','2');
// myGraph.addEdge('4','5');
// myGraph.addEdge('1','2');
// myGraph.addEdge('1','0');
// myGraph.addEdge('0','2');
// myGraph.addEdge('6','5');



//# ALGORITHMS

//W  Recursive Function
// Structure
/* 
Recursive Function 
-> Base Case
-> Recursive Function
*THe base case is what keeps the function from causing an error.
*/

let recursionCounter = 0; // A counter is a way to implement a base case
function inception(){
    console.log(recursionCounter);
    if (recursionCounter > 3){
        return 'Done!'
    }
    recursionCounter ++;
    return inception();    //This will cause a stack over flow and error out to avoid crashing your browser. Need to add a base case
}

// console.log(inception());

//Write two functions that finds the factorial of any number. One should be recursive, the other should just use a for loop
// 5! or 5 factorial
// 5*4*3*2*1
function findFactorialRecursive(number){
    //code here
    if (number === 2){
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(num){
    //code here
    let answer = 1;
    if (num === 2){
        answer = 2;
    }
    for (let i = 2; i <= num; i++){
        answer = i * answer; 
    }
    return answer;
}
// console.log(findFactorialRecursive(5));


//W Given a number N return the index value of the Fibonacci sequence where the sequence is:

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// The pattern of the sequence is that each value is the sum iof the previous 2 values, that means that for N=5 -> 2+3 

function fibonacciIterative(n){  //Big O -> O(n-2) which is O(n)      
    //code here
    let array=[0,1]
    for (let i = 2; i <= n; i++){
        array.push(array[i-1]+array[i-2]);
    }
    return array[n];
}
// console.log(fibonacciIterative(21));



function fibRecursive(n){  // Big O -> O(2^N)   Exponential = recursive algorithms that solve a problem of N size
    if (n < 2){
        return n;
    }
    return fibRecursive(n-1) + fibRecursive(n-2) //Keeps iterating until we get to index (2)
}
// console.log(fibRecursive(8));

//W REVERSE STRING USING RECURSION
//# EXTRA EXERCISE

//Implement a function that reverses a string using iteration...and then recursion!
let strReverse = [];
function reverseStringIter(str) {
    for (let i = 0; i < str.length; i++){
        strReverse.unshift(str[i]);
    }
    return strReverse.join('');
}

//console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'

//console.log(reverseStringIter('yoyo mastery'));


//Now with recursion
function reverseStringRecursive(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}
//console.log(reverseStringRecursive("yoyo master"));

  /*
  w EXPLANATION OF reversing a string with recursion
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  
  Each call: str === "?"        	                reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  

//# SORTING ALGORITHMS 

//* MERGE SORT EXERCISE

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle) 
    const right = array.slice(middle)
    console.log('left:', left);
    console.log('right:', right);

  
  return merge(
    mergeSort(left),    //THESE Two lines inside of return merge{... } Are what split the arrays all the way into individual arrays of single nodes. 
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  console.log(`Left: ${left} Right: ${right}`)
  console.log(`Result Concatenation for each merge: ${result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))}`);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);

/* 
DIAGRAM OF THE MERGE SORT FUNCTION
ARRAY [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

1. [99, 44, 6, 2, 1] & [5, 63, 87, 283, 4, 0]
2. [99, 44] & [6, 2, 1] & [5, 63, 87,] & [283, 4, 0]
3. [99] & [44] & [6] & [2, 1] & [5] & [63, 87] & [283] & [4, 0]
4. [99] & [44] & [6] & [2] & [1] & [5] & [63] & [87] & [283] & [4] & [0]
5. [44, 99] & [6] & [1, 2] & [5] & [63, 87] & [283] & [0, 4]
6. [44, 99] & [1, 2, 6] & [5, 63, 87] & [0, 4, 283]
7. [1, 2, 6, 44, 99] & [0, 4, 5, 63, 87, 283]
8. [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]





*/



