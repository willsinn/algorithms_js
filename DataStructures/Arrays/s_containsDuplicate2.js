// 219. Contains Duplicate II
// Easy

// 1240

// 1351

// Add to List

// Share
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105
// Accepted
// 321,698
// Submissions
// 832,343

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let result = {
        match:false,
    };
    
    for (let i=0;i<nums.length;i++){
        const num = nums[i]
        for (let j=i+1;j<nums.length;j++) {
            if (num === nums[j] && Math.abs(i-j) <= k) result.match = true;
        }
    }
return result.match
};