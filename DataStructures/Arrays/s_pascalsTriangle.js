// 118. Pascal's Triangle
// Easy

// 2273

// 130

// Add to List

// Share
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30
// Accepted
// 466,859
// Submissions
// 848,908

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let rowCount = 1;
    let result = [];
    
    while (rowCount <= numRows) {
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
    return result
    
};