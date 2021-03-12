// 387. First Unique Character in a String
// Easy

// 2729

// 137

// Add to List

// Share
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

// Accepted
// 695,895
// Submissions
// 1,293,853

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let map = {};
    
    for (let i = 0; i<s.length; i++) {
        const letter = s[i];
        if (map[letter]) {
            map[letter] = [...map[letter], i]
        }
        if (!map[letter]) { map[letter]=[i] }
    }
    for (const char in map) {
        console.log(char, map[char])
        if (map[char].length === 1) {
            return map[char][0];
        }
    }
    return -1;

};