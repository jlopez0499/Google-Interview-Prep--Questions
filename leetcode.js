/**
 * param {string} s
 * return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. 

 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1.

 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

var merge = function(nums1, m, nums2, n) {
    while(m > 0 && n > 0){
        if(nums1[m - 1] > nums2[n - 1]){ 
            nums1[m+n-1] = nums1[m-1];
            m--;
        } else {
            nums1[m+n-1] = nums2[n-1];
            n--;
        }
    }
    
    while(n > 0) {
        nums1[n - 1] = nums2[n - 1];
        n--;
    }
};



//# FIND MEDIAN OF TWO SORTED ARRAYS
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    var sorted = [], index1 = 0, index2 = 0;

    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1]- nums2[index2] > 0) {
            sorted.push(nums2[index2++]);
        } else {
            sorted.push(nums1[index1++]);
        }
    }

    if (index2 < nums2.length) {
        sorted = sorted.concat(nums2.slice(index2));
    } else {
        sorted = sorted.concat(nums1.slice(index1));
    }
    let length = sorted.length;
    if (length % 2 === 0){
        let median = sorted[length/2] + sorted[(length/2 + 1)];
        console.log(median);
        median = median/2;
        return median.toFixed(5);
    }else{
        let median = sorted[Math.floor(length/2)];
        return median.toFixed(5);
    }
};


//# Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
//W DIVIDING WITHOUT USING MULTIPLICATION, DIVISION and MOD Operators

var divide = function(dividend, divisor) {
 
    // Calculate sign of divisor i.e.,
    // sign will be negative only if
    // either one of them is negative
    // otherwise it will be positive
    let sign1 = dividend < 0 ? -1 : 1;
    let sign2 = divisor < 0 ? -1 : 1;
    
    // Update both divisor and
    // dividend positive
    dividend = Math.abs(dividend);  //Gives you the Absolute value of the dividend
    console.log(dividend);
    divisor = Math.abs(divisor);    //Gives you the Absolute value of the dividend
    console.log(divisor);
     
    // Initialize the quotient
    let quotient = 0;
    while (dividend >= divisor) {  //While your dividend is greater or equal to divisor. Subtract divisor. Each time increase quotient. 
        dividend -= divisor;   
        quotient++;
    }
    //if the sign value computed earlier is -1 then negate the value of quotient
    if(sign1 + sign2 == 0) quotient=-quotient;
    return quotient;
    }


//W 3 SUM === 0

    function threeSum(nums) {

    }

        for (let i = 0; i < nums.length; i++){
            if (nums[i] > 0){
                break
            }
            if (i = 0) || nums[i - 1] != nums[i]{
                
                return twoSum(nums, i, res)
            }
        }
            
            if i == 0 or nums[i - 1] != nums[i]:
                self.
        return res

    def twoSum(self, nums: List[int], i: int, res: List[List[int]]):
        seen = set()
        j = i + 1
        while j < len(nums):
            complement = -nums[i] - nums[j]
            if complement in seen:
                res.append([nums[i], nums[j], complement])
                while j + 1 < len(nums) and nums[j] == nums[j + 1]:
                    j += 1
            seen.add(nums[j])
            j += 1




//W LONGEST PALINDROMIC SUBSTRING IN STRING
/**
 * @param {string} s
 * @return {string}
 */
// Expand around the center technique 
var longestPalindrome = function(s) {
    var start = 0; // start of sol
    var end = 0; //end of sol
    for (var i=0; i<s.length; i++) { //loop through each character
        var oddPalindrome = true; //bool to check whether palindrome is odd or even in length
        var lenOdd = expandAroundCenter(s, i, i); //length of odd palindrome
        var lenEven = expandAroundCenter(s, i, i+1); //length of even palindrome
        var lenMax = Math.max(lenOdd, lenEven); //get the max
        if (lenMax === lenEven) { 
            oddPalindrome = false;
        }
        if (lenMax > (end - start+1)) { //end - start + 1 = length of current longest palindrome
            if (oddPalindrome) { //odd case
                //make sure to floor since javascript has no types
                start = i - Math.floor(lenMax/2); //since i is the center/ divide length by two and subtract
                end = i + Math.floor(lenMax/2); //vice versa
            } else {
                start = (i - (lenMax/2)) +1; //center is off by 1 so add one. no floor since length is even
                end = (i+1 + (lenMax/2)) -1; //center is forward by one so substract one 
            }
        }
    }
    return s.substring(start, end+1); //dont for get that substr function xs [x,y)
}
var expandAroundCenter = function(s, L, R) {
    //first two conditions prevent an infinite loop
    //second condition verifies its a palindrome
    while (L >=0 && R < s.length && s[L] == s[R]) { 
        L--;
        R++;
    }
    //the loop will exit once it verifies that there isn't a palindrome any more. So L and R are both off by one. 
    R = R-1; //correct off by one error
    L = L+1;
    return R - L + 1; //return length
}



//W Fild and erase all leaves on a tree until it is empty
var findLeaves = function(root){
    let result = [];
  
    let getHeight = function(node){
      if (!node) {
        return -1;
      }
      let height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
      if (!result[height]) { //If result[height] does not exist in array, make it.
        result[height] = [];
      }
      result[height].push(node.val); //For the result[height] append the node's value;
      console.log(result)
      return height;
    };
    getHeight(root);
    return result;
};




//w FIND AND REPLACE STRING 

 /**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let matches = {};
    for(let i = 0; i < indices.length; i++){
        let j = indices[i]; 
        let str = sources[i];
        if(s.substring(j, j+str.length) == str){
            matches[j] = i;        
        }
    }
    let result = '', i = 0;
    while (i < s.length){
        if(matches[i] > -1){
            result += targets[matches[i]];
            i += sources[matches[i]].length;
        }else{
            result += s[i];
            i++;
        }
    }
    return result
};



//W TExt Justification
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

 var fullJustify = function(words, maxWidth) {
    var len = words.length;
    var arr = [];
    var width = 0;
    var item = null;
    var addLen = 0;
    var res = [];
  
    for (var i = 0; i < len; i++) {
      item = words[i];
      addLen = width === 0 ? item.length : (item.length + 1);
  
      if (width + addLen > maxWidth) {
        res.push(helper(arr, maxWidth - width, false));
        arr = [];
        width = 0;
        addLen = item.length;
      }
  
      arr.push(item);
      width += addLen;
    }
  
    res.push(helper(arr, maxWidth - width, true));
  
    return res;
  };
  
  var helper = function (arr, left, isLast) {
    var len = arr.length;
    var num = 0;
    var rem = 0;
    var res = '';
  
    if (len === 1 || isLast) {
      return arr.join(' ') + ' '.repeat(left);
    }
  
    num = Math.floor(left / (len - 1));
    rem = left % (len - 1);
    for (var i = 0; i < len; i++) {
      res += arr[i];
      if (i < len - 1) res += ' '.repeat(num + 1);
      if (i < rem) res += ' ';
    }
  
    return res;
  };
  




//W 1153. String Transforms Into Another String
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

 var canConvert = (str1, str2) => {
    if (str1 === str2) return true;
  
    const map = new Map();
    for (let i = 0; i < str1.length; i++) {
      if (map.has(str1[i]) && map.get(str1[i]) !== str2[i]) {
        return false;
      }
      map.set(str1[i], str2[i]);
      console.log(map);
    }
  
    const set = new Set(map.values());
    if(set.size < 26){
        return true;
    }
    return false;
  };




  /**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    words = [...new Set(words)].sort((a, b) => b.length - a.length);
    console.log(words)
    const map = new Map();                       // map of word  &  longest chain length to it (from big word to it)
    const f = new Array(16 + 1).fill(0);       // Array that will be used to check if a word of that length already exists
    for (let w of words) {
        f[w.length] = 1;
        map.set(w, 1);
    }
    console.log(map)

    let max = 1;                               // max chain length to any string ( from big to small word )
    for (let word of words) {
        const wordlen = word.length;   
        if (f[wordlen - 1]) {
            for (let i = 0; i < wordlen; i++) {
                const smallerWord = word.slice(0, i) + word.slice(i + 1);
                if (map.has(smallerWord)) {
                    if (map.get(word) + 1 > map.get(smallerWord)) {
                        const chainLength = map.get(word) + 1;
                        map.set(smallerWord, chainLength);
                        max = Math.max(max, chainLength);
                    }
                }
            }
        }
    }
    return max;
};



//w 17. Letter Combinations of a Phone Number
/**
 * @param {string} digits
 * @return {string[]}
 */
 let letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    let result = [];
    
    function append(string, index) {
        if(index === digits.length) { 
            console.log(string);
            console.log(index);
            result.push(string);
            return;
        }
        
        for(let x of map[digits[index]]) { //Continues to append to the string until it has reached the length of the digits inputted. Once all matches for the letter have been found, it proceeds to next letter; 
            console.log(`Letter: ${x}`);
            append(string+x, index+1);
        }
    }
    append('', 0);
    return result;
};


//W 20. Valid Parenthesis 
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var parArray = s.split(''); //splits the characters of our string into individual elements in an array 
    var stack = []; //Stack that will hold the individual parenthesis;
    for (var c of parArray) {
        console.log(c);
        if (c === '[') {
            stack.push(']');
            console.log(stack);
        }else if (c === '{') {
            stack.push('}');
            console.log(stack);
        }else if (c === '(') {
            stack.push(')');
            console.log(stack);
        }
        else if (stack.length === 0 || c !== stack.pop()) return false;
    console.log(stack.length)
    }
    if (stack.length === 0) return true;
    return false;
};



//W 359. Logger Rate Limiter 

var Logger = function() {
    this.hashTable = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.hashTable[message] === undefined || 
        (this.hashTable[message] >= 0 && this.hashTable[message] + 10 <= timestamp)) {
        this.hashTable[message] = timestamp;
        return true;
    }
    return false;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

//W 1423. Maximum Points You Can Obtain from Cards

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    let total = 0
    for (let i = 0; i < k; i++) total += cardPoints[i] //gives the total of first 'k' cards
    let best = total //Makes best equal to total points;
    for (let i = k - 1, j = cardPoints.length - 1; ~i; i--, j--) 
        total += cardPoints[j] - cardPoints[i], best = Math.max(best, total)
        console.log(best)
    return best
};



//W 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    return result;
};


//W 843. Guess the Word

const match = (w1, w2) => {
    let c = 0;                                                  // Number of same letters at exact indexes between two words
    for(let i=0; i < w1.length; i++){
        if(w1[i] == w2[i]){ c++ ;}
    }
    return c;
}

const findSecretWord = (wordlist, master) => {
    for(let i=0; i < 10; i++){
        const word = wordlist[Math.floor(Math.random() * wordlist.length)];
        const N = master.guess(word);                            // Number of same letters at exact indexes between selected word and secret.
        if(N == 6 ){ return ;}
        const temp = N === -1 ? wordlist.filter( w => match(w, word) == 0) : wordlist.filter( w => match(w, word) == N);
        wordlist = temp;                                        
    }  
};


//W 1776. Car Fleet II

const getCollisionTimes = function(cars) {
    // Final fleet in reverse order
    const finalFleet = [];
    // Init each answer with -1
    const result = new Array(cars.length).fill(-1);
  
    // Check from last one to first one
    for (let i = cars.length - 1; i >= 0; i -= 1) {
      // Find the first one in front that current car can hit
      // 1) If no cars in final fleet, no need to check
      // 2) If the first car in front will never hit its next car (with value -1), 
      //    no need to check further
      while (finalFleet.length && result[finalFleet[finalFleet.length - 1]] >= 0) {
        const nextCar = finalFleet[finalFleet.length - 1];
        const timeToCatchNext = getTimeToCatchNext(cars[i], cars[nextCar]);
        // If current car A catches next car B sooner than B catches its next car C,
        // then we found the target car, it's B
        if (timeToCatchNext > 0 && timeToCatchNext <= result[nextCar]) {
          break;
        }
        // If curent car A cannot catch next car B (meaning either car B is faster than A, 
        // or B catches C sooner than A catches B), we can safely pop B. Because either A
        // will never hit a car, or if A will hit some car eventually, B will be absorbed 
        // by that car. So we can keep popping until we find it.
        finalFleet.pop();
      }
      // Calculate the answer for current car if we found its target car
      if (finalFleet.length) {
        const nextCar = finalFleet[finalFleet.length - 1];
        result[i] = getTimeToCatchNext(cars[i], cars[nextCar]);
      }
      // Add current car to final fleet
      finalFleet.push(i);
    }
    return result;
  };
  
  function getTimeToCatchNext(leftCar, rightCar) {
    const [leftPosition, leftSpeed] = leftCar;
    const [rightPosition, rightSpeed] = rightCar;
    const distToCatch = rightPosition - leftPosition;
    const diffInSpeed = leftSpeed - rightSpeed;
    return diffInSpeed > 0 ? distToCatch / diffInSpeed : -1;
}


//W 1509. Minimum Difference Between Largest and Smallest Value in Three Moves

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minDifference = function(nums) {
    if (nums.length <= 4) return 0
    nums.sort((a,b) => a-b)
    
    let i = 0;
    let j = nums.length - 4
    let min = Infinity
    
    while(i <= 3){
        min = Math.min(nums[j] - nums[i], min)
        i++
        j++
    }
    
    
    return min
    
};

//W 1146. Snapshot Array

/**
 * @param {number} length
 */
 var SnapshotArray = function(length) {
    this.snaps = [...Array(length)].map(()=>new Map());
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.snaps[index].set(this.snapId, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    while(snap_id >= 0) {
        if(this.snaps[index].has(snap_id)) {
            return this.snaps[index].get(snap_id);
        }
        snap_id--;
    }
    return 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */





//W 1610. Maximum Number of Visible Points

/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
 var visiblePoints = function(points, angle, location) {
    /* sliding window in circular array. Since we need to sort the array, so O(nlogn) */
    /* turn all points into degree */
    const r2d = 180 / Math.PI;
    let selfCount = 0;
    const pointDegs = [];
    
    points.forEach((p) => {
        if (p[1] === location[1] && p[0] === location[0]) {
            selfCount++;
            return;
        }
        pointDegs.push(Math.atan2(
            p[1] - location[1],
            p[0] - location[0],
        ) * r2d);
    });
    
    pointDegs.sort((a, b) => (a - b));
    
    /* make it double so that we can cover this circular array */
    pointDegs.slice(0).forEach((d) => {
        pointDegs.push(d + 360);
    });
    
    let maxCount = 0;
    let left = 0, right = 0;
    
    while (right < pointDegs.length) {
        if (pointDegs[right] - pointDegs[left] <= angle) {
            if (maxCount < right - left + 1) {
                maxCount = right - left + 1;
            }
            right++;
            continue;
        }
        
        while (left <= right) {
            if (pointDegs[right] - pointDegs[left] <= angle) { break; }
            left++;
        }
        
        right++;
    }
    
    return maxCount + selfCount;
};


//W 818. Race Car

/**
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number} target
 * @return {number}
 */
 var racecar = function(target) {
    // The length of shortest sequence
    let dp = new Array(target + 1).fill(0);
    function race(target) {
        if (dp[target]) return dp[target];
        // The number of 'A's that just exceed or reach the goal
        let n = Math.floor(Math.log(target) / Math.log(2)) + 1;
        if ((1 << n) - 1 == target) {
            // just reach the goal
            dp[target] = n;
        } else {
            // exceed the goal and turn back
            dp[target] = race((1 << n) - 1 - target) + n + 1;
            // another way: just almost reach the goal
            // then take a brake or even go turn back to find a suitable distance, then drive toward the goal again
            for (let m = 0; m < n - 1; m++) {
                dp[target] = Math.min(dp[target], race(target - (1 << (n - 1)) + (1 << m)) + n + m + 1);
                // Here, the explanation of the second parameter. (draw a picture is easier to understand)
                // It can be divided into two parts
                // Firstly, race(target - (1 << (n - 1)) + (1 << m))
                /**
                 * target: the goal we need to reach
                 * (1 << (n - 1)) - 1: the point before the goal
                 * (1 << m) - 1: the distance we need to turn back
                 * combine above, it's (target - ((1 << (n - 1)) - 1)) + ((1 << m) - 1)
                 * so it's the distance between target and the second turning point point
                 */
                // secondly, n + m + 1
                // In fact, it should be (n - 1)'A' + 1'R' + m'A' + 1'R'
            }
        }
        return dp[target];
    }
    return race(target)
};


//W 10. Regular Expression Matching

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    const dp = {}

    /*
     * i and j and the indexes in s and p
     * check(i, j) means checking if s[i:] and p[j:] can match
     */
    const check = (i, j) => {
        const key = `${i}:${j}`
        // base cases
        // result is calculated
        if (dp[key] !== undefined) {
            return dp[key]
        }
        // out of range
        if (i > s.length) {
            return false
        }
        // all chars in s and p are checked
        if (i === s.length && j === p.length) {
            return true
        }
        let result
        // recursive cases
        // s[i] and p[j] are the same char or p[j] is a dot
        if (s[i] === p[j] || p[j] === ".") {
            // the symbol is followed by a star
            if (p[j + 1] === "*") {
                // match 1 occurence in s or
                // skip p[j]* by repeating 0 occurences
                result = check(i + 1, j) || check(i, j + 2)
            } else { // is not followed by a star
                result = check(i + 1, j + 1)
            }
        } else { // the s[i] and p[j] are not the same char
            // try to skip p[j]* by repeating 0 occurences
            if (p[j + 1] === "*") {
                result = check(i, j + 2)
            } else { // p[j] is not skippable. match fail
                result = false
            }
        }
        dp[key] = result
        return result
    }
    return check(0, 0)
};


//W 19. Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    if (!fast) return head.next  //Break point in case the length of the linked list is = n
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};


//W 1151. Minimum Swaps to Group All 1's Together

/**
 * @param {number[]} data
 * @return {number}
 */
 var minSwaps = function (data) {
    let windowLen = 0;
    for (let i = 0; i < data.length; i++) {  //# windowLen returns the ammount of ones that the array of numbers has
      if (data[i] === 1) windowLen++;
    }
      
    let maxOnes = 0; 
    let countOnes = 0;
    let start = 0;
    for (let end = 0; end < data.length; end++) {
      if (data[end] === 1) countOnes++; 
        
      if (end - start + 1 > windowLen) {
        const numBefore = data[start];  //
        if (numBefore === 1) countOnes--;
        start++;
      }
      maxOnes = Math.max(maxOnes, countOnes);  //# Sets max ones equal to either countOnes or the original maxOnes(0) depending on which is bigger
    }
  
    return windowLen - maxOnes;
  };


  //W 418. Sentence Screen Fitting

  /**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
function wordsTyping(sentence, rows, cols) {
    const _sentence = sentence.join(' ') + ' '; // non-repeated string separated by a space
    let start = 0;
    const n = _sentence.length;
  
    for (let i = 0; i < rows; i++) {
      start += cols;
      if (_sentence[start % n] === ' ') {
        start++;
      } else {
        while (start > 0 && _sentence[(start - 1) % n] !== ' ') {
          start--
        };
      }
    }
  
    return Math.floor(start / _sentence.length);
  }


//W  18. 4Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    var ans = []
    for(var m = 0; m < nums.length - 3; m++){
        if(nums[m] > target && target > 0) return ans
        for(var i = m + 1; i < nums.length - 2; i++){
            for(var j = i + 1, k = nums.length - 1; j < k;){
                if(nums[m] + nums[i] + nums[j] + nums[k] === target){
                    ans.push([nums[m] , nums[i] , nums[j] , nums[k]])
                    j++
                    k--
                    var sign = false
                    while(nums[j] === nums[j - 1]){
                        if(j === k - 1) {
                            sign = true
                            break
                        }
                        j++
                    }
                    while(nums[k] === nums[k + 1]){
                        if(j === k - 1) {
                            sign = true
                            break
                        }
                        k--
                    }
                    if(sign){
                        break
                    }
                }else if(nums[m] + nums[i] + nums[j] + nums[k] < target){
                    j++
                }else{
                    k--
                }
            }
            if(nums[i + 1] === nums[i]) i++
            
            while(nums[i + 1] === nums[i] && i < nums.length - 2){
                i++
            }
        }
        while(nums[m + 1] === nums[m] && m < nums.length - 3){
            m++
        }
    }
    return ans
};



//W 329. Longest Increasing Path in a Matrix

/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(M) {
    let ylen = M.length, xlen = M[0].length, ans = 0,
        memo = Array.from({length: ylen}, el => new Uint16Array(xlen))
    const dfs = (y, x) => {
        if (memo[y][x]) return memo[y][x]
        let val = M[y][x]
        memo[y][x] = 1 + Math.max(
            y < ylen - 1 && M[y+1][x] < val ? dfs(y+1,x) : 0,
            y > 0 && M[y-1][x] < val ? dfs(y-1,x) : 0,
            x < xlen - 1 && M[y][x+1] < val ? dfs(y,x+1) : 0,
            x > 0 && M[y][x-1] < val ? dfs(y,x-1) : 0)
        return memo[y][x]
    }
    for (let i = 0; i < ylen; i++)
        for (let j = 0; j < xlen; j++)
            ans = Math.max(ans, dfs(i, j))
    return ans
};


//W 65. Valid Number

/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(S) {
    let exp = false, sign = false, num = false, dec = false
    for (let c of S)
        if (c >= '0' && c <= '9') num = true     
        else if (c === 'e' || c === 'E')
            if (exp || !num) return false
            else exp = true, sign = false, num = false, dec = false
        else if (c === '+' || c === '-')
            if (sign || num || dec) return false
            else sign = true
        else if (c === '.')
            if (dec || exp) return false
            else dec = true
        else return false
    return num
};



/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
 var findMaxValueOfEquation = function(points, k) {
    let result = -Infinity;
    let queue = [];
    for(let point of points) {
        while(queue.length && point[0] - queue[0][1] > k) {
            queue.shift();
        }
        if(queue.length) {
            result = Math.max(result, queue[0][0] + point[1] + point[0]);
        }
        while(queue.length && point[1] - point[0] > queue[queue.length - 1][0]) {
            queue.pop();
        }
        queue.push([point[1] - point[0], point[0]]);
    }
    return result;
};


//W 1937. Maximum Number of Points with Cost

/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
    let prev = points[0]; 
    let curr = Array(points[0].length); 
    
    for(let i = 1; i<points.length; i++){
        
        // from left to right; 
        for(let j = 0, maxAdd=0; j<points[0].length;j++){
            maxAdd = Math.max(maxAdd-1, prev[j]);
            curr[j] = points[i][j] + maxAdd;
        }
        
        for(let j = points[0].length-1, maxAdd = 0; j>=0; j--){
            maxAdd = Math.max(maxAdd-1, prev[j]);
            curr[j] = Math.max(curr[j], points[i][j] + maxAdd)
        }
        
        
        prev = curr; 
        curr = Array(points[0].length)
        
    }
    return Math.max(...prev)
};



//W 70. Climbing Stairs DYNAMIC PROGRAMMING

/**
 * @param {number} n
 * @return {number}
 */
 let climbStairs = function(n) {
    let arr=[];
    arr[1]=1;
    arr[2]=2;
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n];
};


//W 21. Merge Two Sorted Linked Lists

/**
* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};


//W 23. Merge k Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const merge = (l1, l2) => {
      if (!l1 || !l2) return l1 || l2;
      let node = {};
      const root = node;
      while (l1 && l2) {
        if (l1.val <= l2.val) {
          node.next = l1;
          l1 = l1.next;
        } else {
          node.next = l2;
          l2 = l2.next;
        }
        node = node.next;
      }
      if (l1) node.next = l1;
      if (l2) node.next = l2;
      return root.next;
    }
    
    let root = lists[0];
    for (let i = 1; i < lists.length; i++) {
      root = merge(root, lists[i]);
    }
    
    return root || null;
  };


//W  104. Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
}



//W 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    let vals = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in vals) {
        return [vals[target-nums[i]], i];
      } else {
        vals[nums[i]] = i;
      }
    }
    return [];
  };


//W 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };
  
  //Time Complexity: O(n)
  //Space Complexity: O(1)