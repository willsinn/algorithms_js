// 202. Happy Number
// Easy

// 2990

// 493

// Add to List

// Share
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
// Accepted
// 608,162
// Submissions
// 1,185,212

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let map = new Map();
    map.set(0, `${n}`)
    let prev;
    while(map.get(0) !== "1") {
        if (prev === map.get(0)) return false
                    prev = map.get(0)
        if (map.get(0) === 1) return true

        const numsSquared = map.get(0).split("");
        
        let total = 0;
        for (let i=0; i<numsSquared.length;i++) {
            total += parseInt(numsSquared);
        }
        map.set(0, `${total}`)
    }
    return false
};