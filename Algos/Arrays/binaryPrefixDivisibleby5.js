// Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

// Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

// Example 1:

// Input: [0,1,1]
// Output: [true,false,false]
// Explanation:
// The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
// Example 2:

// Input: [1,1,1]
// Output: [false,false,false]
// Example 3:

// Input: [0,1,1,1,1,1]
// Output: [true,false,false,false,true,false]
// Example 4:

// Input: [1,1,1,0,1]
// Output: [false,false,false,false,false]

// Note:

// 1 <= A.length <= 30000
// A[i] is 0 or 1

var prefixesDivBy5 = function (A) {
  let arr = [];
  let ind = 0;
  for (let i = 0; i < A.length; i++) {
    if (i === 0 && A[i] === 0) {
      arr.push(true);
      ind = 0;
    }
    if (A[i] === 1) {
      arr.push(false);
      ind++;
    }
    if (ind > 4) {
      arr.push(true);
      ind++;
    }
  }
  return arr;
};
