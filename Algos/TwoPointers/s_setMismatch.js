// 645. Set Mismatch
// Easy

// 1151

// 437

// Add to List

// Share
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104
// Accepted
// 129,159
// Submissions
// 315,324


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let result= [];
    
    for (let i=0; i<nums.length;i++) {
        const pointer1 = nums[i];
        for(let j=i+1; j<nums.length;j++) {
            const pointer2 = nums[j];
            if (pointer1 === pointer2) {
                result.push(pointer1);
                break;
            }
        }
    }
    for (let i=0; i<nums.length;i++) { 
        const counter = i+1;
        if (!nums.includes(counter)) {
            
            result.push(counter);
            break;
        }
    }
    return result
};