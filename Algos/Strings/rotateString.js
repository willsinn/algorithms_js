// 796. Rotate String
// Easy

// 1082

// 61

// Add to List

// Share
// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:

// A and B will have length at most 100.
// Accepted
// 97,934
// Submissions
// 199,552

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
 var rotateString = function(A, B) {
    if (A === B) return true;
    if (A.length !== B.length) return false;
    
    
    let maxRotations = A.length;
    let rotateA = A;
    
    while (maxRotations > 0) {
        if (rotateA === B) return true;
        let str = rotateA.slice(1);
        str+=rotateA[0];
        rotateA = str
        maxRotations--;
    }
    return false
};