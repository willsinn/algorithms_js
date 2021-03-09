// 485. Max Consecutive Ones
// Easy

// 1129

// 380

// Add to List

// Share
// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000
// Accepted
// 363,051
// Submissions
// 687,289

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let str = nums.join("")
    str = str.split("0");
    let result = 0;
    
    for (let i=0; i<str.length;i++) {
        if (result < str[i].length) result = str[i].length
    }
    return result
};