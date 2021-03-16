// 709. To Lower Case
// Easy

// 644

// 1825

// Add to List

// Share
// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"
// Accepted
// 256,965
// Submissions
// 320,451

/**
 * @param {string} str
 * @return {string}
 */
 var toLowerCase = function(str) {
    var result = ''
    
    for (var i = 0; i < str.length; i++) {
        // get the code of the current character
        var code = str.charCodeAt(i)
      
      // check if it's within the range of capital letters
      if (code > 64 && code < 91) {
      
        // if so, add a new character to the result string
        // of the character from our code, plus 32
        result += String.fromCharCode(code + 32)
      } else {
      
          // otherwise, just add the current character
        result += str.charAt(i)
      }
    }
    
    // return the result
    return result
  
  };