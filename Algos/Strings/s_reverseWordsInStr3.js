// 557. Reverse Words in a String III
// Easy

// 1386

// 102

// Add to List

// Share
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.
// Accepted
// 249,044
// Submissions
// 345,087


/**
 * @param {string} s
 * @return {string}
 */
 const reverseWords = function(s) {
    const words = s.split(" ");
    let result = [];

    for (let i=0;i< words.length; i++) {
        const word = words[i];
        let reversedWord = "";
        for (let j = word.length-1; j >= 0; j-- ) {
            const letter = word[j];
            reversedWord = reversedWord + letter;
        }
        result.push(reversedWord)
    }
    return result.join(" ")
};