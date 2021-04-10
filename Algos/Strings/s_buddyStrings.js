// 859. Buddy Strings
// Easy

// 931

// 671

// Add to List

// Share
// Given two strings a and b, return true if you can swap two letters in a so the result is equal to b, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at a[i] and b[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

 

// Example 1:

// Input: a = "ab", b = "ba"
// Output: true
// Explanation: You can swap a[0] = 'a' and a[1] = 'b' to get "ba", which is equal to b.
// Example 2:

// Input: a = "ab", b = "ab"
// Output: false
// Explanation: The only letters you can swap are a[0] = 'a' and a[1] = 'b', which results in "ba" != b.
// Example 3:

// Input: a = "aa", b = "aa"
// Output: true
// Explanation: You can swap a[0] = 'a' and a[1] = 'a' to get "aa", which is equal to b.
// Example 4:

// Input: a = "aaaaaaabc", b = "aaaaaaacb"
// Output: true
 

// Constraints:

// 1 <= a.length, b.length <= 2 * 104
// a and b consist of lowercase letters.
// Accepted
// 88,223
// Submissions
// 302,956

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
 var buddyStrings = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    let [dif, chars] = [[], new Set(A)];
    for (i in A) {
        if (A[i] != B[i]) {
            dif.push([A[i], B[i]]);
        }
    }
    return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};