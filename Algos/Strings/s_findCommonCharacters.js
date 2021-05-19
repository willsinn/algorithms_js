//https://leetcode.com/problems/find-common-characters/




// 1002. Find Common Characters
// Easy

// 1506

// 144

// Add to List

// Share
// Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

 

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]
 

// Note:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.
// Accepted
// 108,260
// Submissions
// 157,524



/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    let res = words[0].split("")
    let arr = [];
    
    if (words.length === 1) return res;
    
    for (let i=1;i<words.length;i++) {
        const word = words[i].split("");
        
        for (let j=0; j<word.length;j++) {
            let letter = word[j];
            if (res.includes(letter)&&!arr.includes(letter)) {
                arr.push(letter);
            }
                else {
                    const answerArr = res.filter(v => v===letter).length
                    const wordMax = res.filter(v => v===letter).length
                    const maxRepeated = answerArr >= wordMax ? wordMax : answerArr;
                    const currentRepeated = arr.filter(v => v===letter).length
                    
                    if (currentRepeated < maxRepeated) arr.push(letter)   
            }
        }
        res = arr;
        arr = [];

    }
    return res;
};


var commonChars = function(A) {
    let res = [...A[0]];
    for (let i = 1; i < A.length; i++) {
      res = res.filter(c => {
        const l = A[i].length;
        A[i] = A[i].replace(c, "");
        return l > A[i].length;
      });
    }
    return res;
  };