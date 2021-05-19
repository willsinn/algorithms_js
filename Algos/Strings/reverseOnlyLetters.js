// https://leetcode.com/problems/reverse-only-letters/submissions/




// 917. Reverse Only Letters
// Easy

// 850

// 44

// Add to List

// Share
// Given a string s, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Note:

// s.length <= 100
// 33 <= s[i].ASCIIcode <= 122 
// s doesn't contain \ or "
// Accepted
// 83,155
// Submissions
// 139,809


/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} S
 * @return {string}
 */
 var reverseOnlyLetters = function(S) {
    if (S.length < 2) return S;
    const a = S.split('');
    let i = 0;
    let j = S.length - 1;
    while (i < j) {
      while (!/[a-zA-Z]/.test(S[i])) i++;
      while (!/[a-zA-Z]/.test(S[j])) j--;
      if (i < j) [a[i], a[j]] = [a[j], a[i]];
      i++;
      j--;
    }
    return a.join('');
  };