// 290. Word Pattern
// Easy

// 1777

// 213

// Add to List

// Share
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lower-case English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.
// Accepted
// 249,423
// Submissions
// 649,303

var wordPattern = function(pattern, str) {
    const words = str.split(" ");
    var map1 = {};
    var map2 = {};
    if (pattern.length != words.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (map1.hasOwnProperty(pattern[i]) && map2.hasOwnProperty(words[i])) {
            if (map1[pattern[i]] != words[i] || map2[words[i]] != pattern[i]) {
                return false;
            }
        } else if (map1.hasOwnProperty(pattern[i]) || map2.hasOwnProperty(words[i])) {
            return false;
        } else {
            map1[pattern[i]] = words[i];
            map2[words[i]] = pattern[i];
        }
    }
    return true;
};