// 953. Verifying an Alien Dictionary
// Easy

// 1725

// 704

// Add to List

// Share
// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.
// Accepted
// 238,616
// Submissions
// 455,646

var isAlienSorted = function(words, order) {

    let isAlien = true;
    let counter = 0;
    let lexiOrder = order;
    let prev = null;
    while (counter < words.length && isAlien) {
        const letter = words[counter][0];
        if (prev !== words[counter] && !lexiOrder.includes(letter)) return false;
        for (let i=0; i<lexiOrder.length; i++) {
            const char = lexiOrder[i];
            if (letter === char) {
                const newOrder = lexiOrder.slice(i+1, lexiOrder.length);
                
                lexiOrder = newOrder
                break;
            }
        }
        prev = words[counter]
        counter++;
        
    }
    return isAlien
    
};