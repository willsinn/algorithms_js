// 58. Length of Last Word
// Easy

// 998

// 3038

// Add to List

// Share
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// Accepted
// 480,541
// Submissions
// 1,435,055

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    if (s === " ") return 0;
    
    let count = 0;
    
    for (let i = s.length-1; i >= 0; i--) {
        const l = s[i];
        if (l !== " ") count++;
        
        if (l === " " && count > 0) {
            break
        }
    }
    return count
};