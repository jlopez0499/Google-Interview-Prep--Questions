//# SORTING ALGORITHMS 



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



//W QUICK SORT 
//#SHORTER QUICK SORT USING RECURSION
//* Big-O Sort Algorithm n*log(n)   QUICKSORT
function quick_Sort(array) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}


//MERGE TWO SORTED ARRAYS INTO THE FIRST ARRAY SORTED
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6]; 
let n = 3;
let temp = [];

function mergeArrays(nums1,  m , nums2, n) {
    var i = 0, j = 0, k = 0;

    // Traverse both array
    while (i < m && j < n) {
        // Check if current element of first
        // array is smaller than current element
        // of second array. If yes, store first
        // array element and increment first array
        // index. Otherwise do same with second array
        if (nums1[i] < nums2[j])
            temp[k++] = nums1[i++];
        else
            temp[k++] = nums2[j++];
    }

    // Store remaining elements of first array
    while (i < m)
        temp[k++] = nums1[i++];

    // Store remaining elements of second array
    while (j < n)
        temp[k++] = nums2[j++];
        
    return temp;
}

 

//W SORTING INTERVIEW QUESTIONS
// 1 - Sort 10 schools around your house by distance:
//# insertion sort

// 2 - eBay sorts listings by the current Bid amount:
//# radix or counting sort

// 3 - Sort scores on ESPN
//# Quick sort

// 4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//# Merge Sort

// 5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//# Insertion Sort

// 6 - Temperature Records for the past 50 years in Canada
//# radix or counting Sort
//# Quick sort if decimal places

// 7 - Large user name database needs to be sorted. Data is very random.
//# Quick sort

// 8 - You want to teach sorting
//# Bubble sort



//W MERGE SORTED ARRAYS into NEW ARRAY
function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }   
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}




//# SEARCHING ALGORITHMS

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {         //BREADTH FIRST SEARCH
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
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
  breadthFirstSearch(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while(queue.length > 0){
      currentNode = queue.shift(); // this returns and removes the first item in the queue ( ARRAY)
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }

    return list;
  }
  DFSInOrder(){
    return TraverseInOrder(this.root, [])
  }
  DFSPreOrder(){
    return TraversePreOrder(this.root, [])
  }
  DFSPostOrder(){
    return TraversePostOrder(this.root, [])
  }
}

function TraverseInOrder(node, list){
  if(node.left){
    TraverseInOrder(node.left, list)
  }
  list.push(node.value);
  if(node.right){
    TraverseInOrder(node.right, list)
  }
  return list;
}

function TraversePreOrder(node, list){
  list.push(node.value);
  if(node.left){
    TraversePreOrder(node.left, list)
  }
  if(node.right){
    TraversePreOrder(node.right, list)
  }
  return list;
}

function TraversePostOrder(node, list){
  if(node.left){
    TraversePostOrder(node.left, list)
  }
  if(node.right){
    TraversePostOrder(node.right, list)
  }
  list.push(node.value);

  return list;
}



const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.breadthFirstSearch());
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
