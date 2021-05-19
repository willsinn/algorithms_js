// https://leetcode.com/problems/valid-mountain-array/


// 941. Valid Mountain Array
// Easy

// 952

// 97

// Add to List

// Share
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104
// Accepted
// 161,090
// Submissions
// 489,587


/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    let result = true;
    let prev = arr[0]
    let counter = 1;
    let decreasing = false;
    while (arr.length > counter && result) {
        
        const curr = arr[counter];
        if (counter === 1 && prev > curr) result = false;
        if (prev === curr) result = false;
        if (prev > curr && !decreasing) {
            decreasing = true;
        } 
        if (decreasing && curr > prev) result = false;
        prev = curr
        counter++
    }
    if (!decreasing) {
        return false;
    } else {
    return result
    }
};