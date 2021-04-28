// 476. Number Complement
// Easy

// 1161

// 86

// Add to List

// Share
// Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
// Example 2:

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

// Constraints:

// The given integer num is guaranteed to fit within the range of a 32-bit signed integer.
// num >= 1
// You could assume no leading zero bit in the integer’s binary representation.
// This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/
// Accepted
// 210,864
// Submissions
// 323,478

/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    
const numBit = parseInt(num).toString(2)
     
     let newBit = ""
 
    for (let i=0; i<numBit.length;i++) {
        const bit = numBit[i];
        if (bit == 0) newBit += "1";
         if (bit == 1) newBit += "0";
    }
     
     const newNum = parseInt(newBit, 2)
     return newNum
 };