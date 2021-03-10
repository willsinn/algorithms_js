// 344. Reverse String
// Easy

// 2162

// 754

// Add to List

// Share
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
// Accepted
// 976,810
// Submissions
// 1,386,893

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    console.log(s)
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        const left = s[l];
        const right = s[r];
        
        s.splice(l, 1, right);
        s.splice(r, 1, left);
        l++;
        r--;
    }
    
};