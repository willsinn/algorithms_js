// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/



// 961. N-Repeated Element in Size 2N Array
// Easy

// 657

// 265

// Add to List

// Share
// In a array nums of size 2 * n, there are n + 1 unique elements, and exactly one of these elements is repeated n times.

// Return the element repeated n times.

 

// Example 1:

// Input: nums[1,2,3,3]
// Output: 3
// Example 2:

// Input: nums[2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums[5,1,5,2,5,3,5,4]
// Output: 5
 

// Note:

// 4 <= nums.length <= 10000
// 0 <= nums[i] < 10000
// nums.length is even
// Accepted
// 148,202
// Submissions
// 198,217



/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    let map = {};
    
    for (let i=0; i<nums.length;i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    }
    
    let uniqueElems = Object.entries(map)
    const target = uniqueElems.length - 1;
    const res = uniqueElems.filter(v => v[1] === target);
    return parseInt(res[0])
};



/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    let nml = nums.length;
    let obj = {};
    for(let i=0; i<nml; i++){
        if(obj[nums[i]] === null) return nums[i];
        obj[nums[i]] = null;
    }
};