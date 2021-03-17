// 349. Intersection of Two Arrays
// Easy

// 1288

// 1494

// Add to List

// Share
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
// Accepted
// 457,052
// Submissions
// 703,561

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let map = {};
    let result = [];
    for (let i=0; i<nums1.length;i++) {
        const num1 = nums1[i];
        if (!map[num1]) {
            map[num1] = true
        }
    }
 for (let i=0; i<nums2.length;i++) {
        const num2 = nums2[i];
        if (map[num2]&&!result.includes(num2)) {
            result.push(num2)
        }
    }
return result

};