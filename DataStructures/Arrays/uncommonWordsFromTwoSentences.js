// https://leetcode.com/problems/uncommon-words-from-two-sentences/





// 884. Uncommon Words from Two Sentences
// Easy

// 616

// 109

// Add to List

// Share
// We are given two sentences s1 and s2.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
 

// Note:

// 0 <= s1.length <= 200
// 0 <= s2.length <= 200
// s1 and s2 both contain only spaces and lowercase letters.
// Accepted
// 74,899
// Submissions
// 116,436


/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    const a1 = s1.split(" ")
    const a2 = s2.split(" ")
    let map = {};
    
    let queue = [a1, a2]
    while (queue.length > 0) {
        const first = queue.shift();
            for (let i=0;i<first.length; i++) {
                const word = first[i];
                
                if (!map[word]) {
                    map[word] = 1;
                } else {
                    map[word] += 1;
                }
            }
    }
    const uncommonWords = Object.entries(map).filter(v => v[1] === 1).map(v => v[0]);
    return uncommonWords    
};