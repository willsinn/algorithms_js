// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

// var backspaceCompare = function (S, T) {
//   //return true if S & T strings are equal after all the backspaces
//   //Loop through S & T individually and evaluate outcome, compare assigned outcomes

//   let backS = "";
//   let backT = "";

//   [...S].forEach((char) => {
//     if (char === "#") {
//       const updated = backS.slice(0, -1);
//       console.log(updated);
//       backS = updated;
//     }
//     if (char !== "#") {
//       backS += char;
//     }
//   });
// };
