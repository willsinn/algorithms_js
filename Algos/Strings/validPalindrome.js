// 125. Valid Palindrome
// Easy

// 1802

// 3639

// Add to List

// Share
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
// Accepted
// 808,588
// Submissions
// 2,110,840

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    let left = 0;
    let right = s.length -1;
    
    while(left < right) {
         if(s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
   
    return true
    
};

