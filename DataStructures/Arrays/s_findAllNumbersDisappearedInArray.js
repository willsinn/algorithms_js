// 448. Find All Numbers Disappeared in an Array
// Easy

// 3929

// 286

// Add to List

// Share
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]
// Accepted
// 349,725
// Submissions
// 623,392

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let result = []
    let match = [];
    while(len > 0) {
        match.push(len);
        len--
    }
    for (let i=0;i<match.length;i++) {
        if (!nums.includes(match[i])) result.push(match[i])
    }
    return result
};