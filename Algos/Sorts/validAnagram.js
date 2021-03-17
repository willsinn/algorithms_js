// 242. Valid Anagram
// Easy

// 2407

// 160

// Add to List

// Share
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Accepted
// 776,330
// Submissions
// 1,322,689
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let sArray = s.split("")
    let tArray = t.split("")
    
    sArray.sort( (a, b) => a.localeCompare(b))
    tArray.sort( (a, b) => a.localeCompare(b))
    if (sArray.join(",") === tArray.join(",")) return true;
    return false
};