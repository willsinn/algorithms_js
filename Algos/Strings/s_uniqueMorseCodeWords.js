// 804. Unique Morse Code Words
// Easy

// 901

// 827

// Add to List

// Share
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".
// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.
// Accepted
// 181,290
// Submissions
// 229,422



/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let map = {};
    for (let i=0;i<morse.length;i++) {
        map[alphabet[i]] = morse[i];
    }
    
    let wordsMorse = [];
    for (let i=0;i<words.length;i++) {
        const word = words[i];
        let wordMorse = "";
        for (let j=0;j<word.length;j++) {
            const letter = word[j];
            const letterMorse = map[letter];
            wordMorse += letterMorse;
        }
        wordsMorse.push(wordMorse);
    }
    let result = [];
    
    
    for (let i=0;i<wordsMorse.length;i++) {
        const w = wordsMorse[i];
        if (!result.includes(w)) result.push(w);
    }
    return result.length;

};