'use strict';

/* let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.') */

/*
! JAVASCRIPT FUNCTIONS
W Calling / Running / Invoking the function are the three ways of saying 'use' the function
function logger(){
    console.log('My name is Justin')
}
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const fruitJuice = fruitProcessor(5, 8);
console.log(fruitJuice);

console.log(fruitProcessor(10,3));





?  FUNCTION DECLARARTION
* Declarations can come after being called ex: the console.log can come first as long as you define the function later
function calcAge1(bYear){
    return 2049 - bYear;
}

console.log(calcAge1(1967));
// OR
const age1 = calcAge1(1999);
console.log(age1);

W FUNCTION EXPRESSION
? ALSO AN ANONYMOUS FUNCTION  (A Function without name) Expressions must be defined before calling the function because of Hoisting
const calcAge2 = function (birthyear){
    return 2042 - birthyear;
}

console.log(calcAge2(1942));


! ARROW FUNCTIONS
const appleJuice = (x) => {
    const aJuice = `I used ${x} apples to make a gallon of apple juice.`
    return aJuice
}
console.log(appleJuice(3));


const calcAge3 = bYear => 2022 - bYear;
const age3 = calcAge3(1999);

console.log(age3);

*/

/*
W FUNCTION CALLING ANOTHER FUNCTION
function cutFruit(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} apple piecess and ${orangePieces} orange pieces.`;
    return juice;
}

const fruitPieces = fruitProcessor(5,7);
console.log(fruitPieces)

!THE TWO MOST IMPORTANT DATA STRUCTURES IN JAVASCRIPT ARE ARRAYS AND OBJECTS  
! ARRAYS ARE THE FIRST Data Structure)
##ARRAYS ARE USED FOR ORDERED DATA
* BEFORE ARRAY
const friend1 = 'James';
const friend2 = 'Michael';
const friend3 = 'Kebin';

//* WITH ARRAY
const friends = ['James', 'Michael', 'Kebin'];

console.log(friends);

const years = new Array(1990, 1991, 1992, 1993, 1994);
console.log(years[2]);

console.log(years.length)
console.log(years[years.length-3]);

years.pop(years[4]) //*Removes that item from list 
console.log(years);

const mixedArray = ['justin', 23, 'lopez', 1999, years];
console.log(mixedArray);

mixedArray[1] = 'daniel';
console.log(mixedArray);

console.log(mixedArray);
console.log(mixedArray[4]);


const calcAge = function (bYear){
    return 2030 - bYear;
}


Applying a function to individual items in an array simultaneously with a for statement
const birth = [1999, 2000, 2001, 2002, 2003]

const age = [];
for (let ndx = 0; ndx <= birth.length-1; ndx++){
    //* APPENDS EACH NEW VALUE TO A NEW ARRAY
    age.push(calcAge(birth[ndx]))

    //* JUST PRINTS TO LOG EACH VALUE 
    console.log(`You will be ${calcAge(birth[ndx])} in 2030.`);
}

console.log(age);



W ARRAY METHODS
W PUSH METHOD adds the element to the end of your array

//* Adds element to the end of your array
const friendsList = ['Justin', 'Jessica', 'Yadira']
friendsList.push('Hazel');
console.log(friendsList);

//* Adds element to the beginning of your array
friendsList.unshift('Chloe');
console.log(friendsList);

//* Removes element from your array
//friendsList.pop();
console.log(friendsList);

//* Removes Specific element from array
const idx = friendsList.indexOf('Yadira');
friendsList.splice(idx, 1);
console.log(friendsList);

//* Method to use as a conditional for an element being in your array or not 

if (friendsList.includes('Amaru')){
    console.log('Amaru is one of your friends')
}else {
    console.log('Amaru is not one of your friends')
}

*/
/*
W Big-O Sort Algorithm n*log(n)   QUICKSORT
function quick_Sort(origArray) {
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

var unsortedArray = [6, -4, 9, 3, 92, 43, 18, 0, 27, -69];

console.log("Original array: " + unsortedArray);
var sortedArray = quick_Sort(unsortedArray);
console.log("Sorted array: " + sortedArray);
*/
/*
#SECOND DATA STRUCTURE OBJECT also called a HASH TABLE
# Objects are used for more unstructured data because it doesn't matter what order they are in, you can call elements by their key
const sampleOBJECT = {
    firstName: 'Justin',
    lastName: 'Lopez',
    age: 2022 - 1999,
    job: 'engineer',
    friends: ['Ivan', 'Mickey', 'Richard']
}

console.log(sampleOBJECT);

? Example of calling an element from an OBJECT(HASHTABLE) by its Key 
console.log(sampleOBJECT.lastName);

? OR with brackets can include an expression 
console.log(sampleOBJECT['lastName']);

const nameKey = 'Name';
console.log(sampleOBJECT['first' + nameKey]);

? Lets user type into a pop up what element of the Object they want to know  
const interestedIn = prompt('What do you want to know about sampleOBJECT? between his firstName, lastName, age, job and friends');
console.log(sampleOBJECT[interestedIn]);
*adding a conditional statement
if(sampleOBJECT[interestedIn]) {
    console.log(sampleOBJECT[interestedIn])
}else {
    console.log('Bad Request! Choose between firstName, lastName, age, job and friends!')   
}

? Adding more to the OBJECT
sampleOBJECT.location = 'Los Angeles';
console.log(sampleOBJECT);

*Challenge
*"Justin has 3 friends, and his best friend is called Ivan"  print this without hard naming the actual values. 
console.log(`${sampleOBJECT.firstName} has ${sampleOBJECT.friends.length} friends, and his best friend is ${sampleOBJECT.friends[0]}`)
*/
/*
W OBJECT METHODS
//*This example makes a function an element in the Object
const sampleOBJECT = {
    firstName: 'Justin',
    lastName: 'Lopez',
    birthYear: 1999,
    job: 'engineer',
    friends: ['Ivan', 'Mickey', 'Richard'],
    driversLicense: true,
    
    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
    ? See console.log(sampleOBJECT.calcAge()); below 
    ?calcAge: function() {
    ?    2037 - this.birthYear;
    ?}
    //* This version of the function saves the calcAge to an item in the Object so it doesn't have to recalculate each time. MOST EFFICIENT
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a(n) ${this.job} who is ${this.calcAge()} and he has ${this.driversLicense ? 'a': 'no'} driver's license.`
    },
};

? Works with this.variable and newest function
console.log(sampleOBJECT.calcAge());

? Makes an array of all the values in the original object 
?const sampleObjectVALUES = Object.values(sampleOBJECT);
?console.log(sampleObjectVALUES);

console.log(sampleOBJECT.getSummary());
 OR  only works with stated value not with (this.variable) In order to make it work we must remove the this.var
console.log(sampleOBJECT['calcAge'](1998));

console.log(sampleOBJECT.age);
*/

/* 

W FOR LOOP Object Method
for (let i = 0; i < 10; i++){
    console.log(`I have ${i} instance(s) of this loop.`)
}

*/



