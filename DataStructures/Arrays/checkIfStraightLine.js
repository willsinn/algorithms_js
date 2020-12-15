// 1232. Check If It Is a Straight Line
// Easy

// 466

// 74

// Add to List

// Share
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.
// Accepted
// 86,437
// Submissions
// 195,694


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
        // The first two points declare the slope for the line.
        // If the difference of X or Y change then false.
        
        let slopeX = coordinates[0][0] - coordinates[1][0];
        let slopeY = coordinates[0][1] - coordinates[1][1];
            // console.log(slopeX, slopeY);
        
        coordinates.forEach((coordinate, index) => {
            //compare the current coordinate to the past coordinate
            if (index > 0) {
                const currentX = coordinate[0];  
                const currentY = coordinate[1];
                const lastX = coordinates[index - 1][0];
                const lastY = coordinates[index - 1][0];
                const slopeCheckX = lastX - currentX;
                const slopeCheckY = lastY - currentY;
                // console.log(lastX - currentX);
                if (slopeX !== slopeCheckX || slopeY !== slopeCheckY) {
                    return false
                }
                
            }
        })
        return true
    };