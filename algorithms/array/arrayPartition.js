Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

var arrayPairSum = function (nums) {
  console.log(nums);
  //Nested for loop i & j to find max sum of pairs, find value closest to nums[i] as var then add value to total.

  //1. Declare and assign var to 0;
  //2. Use nested for loop with nums[i] as first val and find closest val in array with nums[j], remove elems and start new loop with array. (While loop maybe?)
  //3. Use Math.min on pairs & add value of pair to total before returning.
};
