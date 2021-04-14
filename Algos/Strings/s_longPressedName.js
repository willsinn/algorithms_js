// 925. Long Pressed Name
// Easy

// 952

// 173

// Add to List

// Share
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.
 

// Constraints:

// 1 <= name.length <= 1000
// 1 <= typed.length <= 1000
// name and typed contain only lowercase English letters.
// Accepted
// 63,768
// Submissions
// 170,904

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
    let map = {};
    
    for (let i=0;i<name.length;i++) {
        const letter = name[i];
        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]+=1;
        }
        
    }
    const a = typed.split("");
    for (const letter in map) {
        const typedLetters = a.filter(l => l ===letter);
        console.log(typedLetters, map)
        if (typedLetters.length < map[letter]) return false
    }
    return true
};


//working solu
var isLongPressedName = function(name, typed) {
    let i = 0, j = 0;
    while(i < name.length && j < typed.length) {
        let lastSame = name.charAt(i), count = 1;
        i++;
        while(i < name.length && name.charAt(i) ==  lastSame){
            count++;
            i++;
        }
        while(j < typed.length && typed.charAt(j) == lastSame) {
            count--;
            j++;
        }
        if(count > 0) return false;
    }
    return i == name.length;
};