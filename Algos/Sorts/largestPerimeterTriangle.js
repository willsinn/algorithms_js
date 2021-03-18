// 976. Largest Perimeter Triangle
// Easy

// 499

// 53

// Add to List

// Share
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

// Example 1:

// Input: nums = [2,1,2]
// Output: 5
// Example 2:

// Input: nums = [1,2,1]
// Output: 0
// Example 3:

// Input: nums = [3,2,3,4]
// Output: 10
// Example 4:

// Input: nums = [3,6,2,3]
// Output: 8
 

// Constraints:

// 3 <= nums.length <= 104
// 1 <= nums[i] <= 106
// Accepted
// 42,427
// Submissions
// 72,402

var largestPerimeter = function(A) {
    A.sort((a, b) => a - b);
    let max = 0;
    for (let i = A.length - 1; i >= 2; i--) {
        let start = i - 2;
        let end = i - 1;
        while (start < end) {
            if (A[end] + A[start] > A[i]) {
                return A[end] + A[start] + A[i];
            } else {
                start++;
            }
        }
    }
    return 0;
};