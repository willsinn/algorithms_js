// 409. Longest Palindrome
// Easy

// 1545

// 101

// Add to List

// Share
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.
// Accepted
// 199,235
// Submissions
// 381,070

var longestPalindrome = function(s) {
    const cache = {};
    let length = 0;
    for(let ch of s) {
        if(cache[ch]) {
            delete cache[ch];
            length += 2;
        }else {
            cache[ch] = 1;
        }
    }

    let hasOdd = false;
    for(let i in cache) {
        hasOdd = true;
        break;
    }
    return length + (hasOdd ? 1 : 0);
};