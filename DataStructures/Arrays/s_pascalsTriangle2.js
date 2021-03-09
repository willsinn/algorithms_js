// 119. Pascal's Triangle II
// Easy

// 1261

// 222

// Add to List

// Share
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

// Accepted
// 358,803
// Submissions
// 686,506


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let rowCount = 1;
    let result = [];
    
    while (rowCount <= rowIndex+1) {
        const prevRow = result[result.length -1];
        let row = [];
        for (let i = 0; i < rowCount; i++) {
            if (rowCount <= 2) row.push(1);
            if (rowCount > 2) {
                if (i === 0 || i === rowCount-1) {
                    row.push(1);
                } else {
                    row.push(prevRow[i-1] + prevRow[i])
                }
                
            }
        }
        result.push(row);
        rowCount++;
    }
    return result[result.length-1]
};