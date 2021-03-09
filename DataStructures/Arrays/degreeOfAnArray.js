// 697. Degree of an Array
// Easy

// 1083

// 863

// Add to List

// Share
// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.
// Accepted
// 95,428
// Submissions
// 176,041
/**
 * @param {number[]} nums
 * @return {number}
 */
 const findShortestSubArray = function(nums) {
    //1. Find the degree of the array which is the maximum frequency of an element.
    let numsMap = {}
    let max = 0;
    let frequency = 0;
    for (let i=0; i<nums.length;i++){
        const num = nums[i];
        if (numsMap[num]) numsMap[num] += 1;
        if (!numsMap[num]) numsMap[num] = 1;
    }
    let arrs = [];
    for (const num in numsMap) {
        if (frequency < num.value) frequency = numsMap[num]
        
    }
    console.log(numsMap)
};