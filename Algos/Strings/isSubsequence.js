// 392. Is Subsequence
// Easy

// 2410

// 238

// Add to List

// Share
// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: If there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
// Accepted
// 291,339
// Submissions
// 587,355

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if (s.length === 0) return true
    let str = s;
    
    for (let i=0; i<t.length;i++) {
        const letter = t[i];
        if (letter === str[0]) {
            if (str.length === 1) return true
            const leftOver = str.slice(1);
            str = leftOver
        }
    }
    return false
};