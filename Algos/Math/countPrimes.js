// 204. Count Primes
// Easy

// 2953

// 767

// Add to List

// Share
// Count the number of prime numbers less than a non-negative number, n.

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
 

// Constraints:

// 0 <= n <= 5 * 106
// Accepted
// 462,913
// Submissions
// 1,430,683

var countPrimes = function (n) {
    let isPrime = new Array(n).fill(true);
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) isPrime[j] = false;
    }
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};