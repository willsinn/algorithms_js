// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

//For the output to be a string, all elements must have that prefix value.
var longestCommonPrefix = function (strs) {
  //With common prefix, we can loop through the first element for like values.
  let prefix = "";

  if (strs.length > 0) {
    let firstElem = strs[0];
    for (let i = 0; i < firstElem.length; i++) {
      const letter = firstElem[i];
      for (let j = 1; j < strs.length; j++) {
        const word = strs[j];
        const l = word[i];
        if (l !== letter) {
          return prefix;
        }
      }
      prefix = prefix.concat(letter);
    }
  }
  return prefix;
};
