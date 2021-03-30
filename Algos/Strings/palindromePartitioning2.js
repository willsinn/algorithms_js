// 132. Palindrome Partitioning II
// Hard

// 1738

// 52

// Add to List

// Share
// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lower-case English letters only.
// Accepted
// 152,605
// Submissions
// 486,350

/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function(s) {
    let prev;
    let res = 0;
    
    for (let i=0;i<s.length;i++) {
        let current = s[i];
        if (prev && prev !== current) res++;
        console.log(current, prev)

        prev = current
    }
    return res;
};