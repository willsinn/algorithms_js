// 53. Maximum Subarray
// Easy

// 11079

// 529

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
// Accepted
// 1,336,930
// Submissions
// 2,798,462

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    // let number = '';
    // for (let i=0;i<digits.length;i++) {
    //     const digit = digits[i];
    //     number=`${number}${digit}`;
    // }
    // let ans = parseInt(number)
    // ans = `${ans+=1}`;
    // const result = ans.split('')
    // return result
    let co = true;
  for (let i = digits.length - 1; i >= 0 && co; i--) {
    digits[i]++;
    co = digits[i] >= 10;
    co && (digits[i] = 0);
  }
  co && digits.unshift(1);
  return digits;
};