// 680. Valid Palindrome II
// Easy

// 2543

// 163

// Add to List

// Share
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
// Accepted
// 260,484
// Submissions
// 700,804

const validPalindrome = (inputStr = '') => {
    if(inputStr.length === 0) {
      return true;
    }
  
    let leftPointer = 0;
    let rightPointer = inputStr.length - 1
    let offBy = 0;
  
    while(offBy <= 1 && rightPointer > leftPointer) {
      let leftChar = inputStr[leftPointer];
      let rightChar = inputStr[rightPointer];
  
      if(leftChar == rightChar) {
        leftPointer += 1;
        rightPointer -= 1;
      } else {
        // Try bringing leftPointer in one and checking for match. If match, increment offBy and continue.
        if(inputStr[leftPointer + 1] === rightChar && inputStr[leftPointer + 2] === inputStr[rightPointer - 1]) {
          offBy += 1;
          leftPointer += 2;
          rightPointer -= 1;
        }
  
        // Try bringing rightPointer in one and checking for match. If match, increment offBy and continue.
        else if(inputStr[rightPointer - 1] === leftChar && inputStr[rightPointer - 2] === inputStr[leftPointer + 1]) {
          offBy += 1;
          leftPointer += 1;
          rightPointer -= 2;
        }
      
        // If we are down to two characters and were able to get this far, we should have a valid passing case
        else if(rightPointer - leftPointer === 1) {
            return true;
        }
  
        // Otherwise, if neither is off by one, it cannot be an almost palindrome.
        else {
          return false;
        }
      }
    }
  
    return offBy <= 1;
  }