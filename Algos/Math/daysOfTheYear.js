// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41
// Example 3:

// Input: date = "2003-03-01"
// Output: 60
// Example 4:

// Input: date = "2004-03-01"
// Output: 61
 

// Constraints:

// date.length == 10
// date[4] == date[7] == '-', and all other date[i]'s are digits
// date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.
// Accepted
// 24,566
// Submissions
// 49,583

/**
 * @param {string} date
 * @return {number}
 */

 const map = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31,
]
var dayOfYear = function(date) {
    const s = date.split("-");
    const month = parseInt(s[1]);
    const days = parseInt(s[2]);
    
    let result = 0;
    if (month > 1) {
        
        for (let i=0; i<month-1;i++) {
            const daysInMonth = map[i];
            result += daysInMonth;
        }
        
    }
    result += days;
    
    return result;
};