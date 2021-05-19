// https://leetcode.com/problems/sort-array-by-parity/


// 905. Sort Array By Parity
// Easy

// 1734

// 92

// Add to List

// Share
// Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

// Note:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000
// Accepted
// 327,565
// Submissions
// 436,842


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let res = [];
    
    for (let i=0; i <nums.length;i++) {
        let num = nums[i];
        
        if (num % 2 === 0) {
            res.unshift(num)
        } else {
            res.push(num)
        }
    }
    return res
};