// 541. Reverse String II
// Easy

// 571

// 1584

// Add to List

// Share
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104
// Accepted
// 108,788
// Submissions
// 220,929

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    const arr = s.split('');
  const reverse = (arr, i, j) => {
    while (i < j) [arr[i++], arr[j--]] = [arr[j], arr[i]];
  }
    for (let i = 0; i < arr.length; i += 2 * k) {
      // try to reverse as much as we can within k characters
      reverse(arr, i, Math.min(i + k - 1, arr.length - 1));
    }
  
    return arr.join('');
  
  
  
  };