// https://leetcode.com/problems/available-captures-for-rook/




// 999. Available Captures for Rook
// Easy

// 330

// 504

// Add to List

// Share
// On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

// When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

// Return the number of available captures for the white rook.

 

// Example 1:


// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: In this example, the rook is attacking all the pawns.
// Example 2:


// Input: board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 0
// Explanation: The bishops are blocking the rook from attacking any of the pawns.
// Example 3:


// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: The rook is attacking the pawns at positions b5, d6, and f5.
 

// Constraints:

// board.length == 8
// board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'
// Accepted
// 41,846
// Submissions
// 61,802



var numRookCaptures = function(board) {
    let rook;
    const bishops = [];
    const pawns = []
    for (let i=0;i<board.length;i++) {
        const width = board[i];
        
        for (let j=0;j<width.length;j++) {
            const boardTile = width[j];
            
            if (boardTile === "R") {
                rook = [i, j]
            }
            if (boardTile === "B") {
                bishops.push([i,j])
            }
            if (boardTile === "p") {
                pawns.push([i,j])
            }
        }
    }
    let captures = 0;
    
    for (let i=0;i<pawns.length;i++) {
        const pawnLength = pawns[i][0];
        const pawnWidth = pawns[i][1]
        if (pawnLength === rook[0]) {
            const inWay = bishops.filter(v => v[0] === pawnLength);
            const minVal = rook[1] > pawnWidth ? pawnWidth : rook[1];
            const maxVal = rook[1] > pawnWidth ? rook[1]:pawnWidth ;
        console.log(inWay, minVal, maxVal, rook[0], "length")
        //     if (inWay.length === 0) captures+=1;
            const pawnRookDiff = maxVal - minVal;
            const bishopRookDiff = inWay[0][]
                 {
            captures+=1

            }

        }
        if (pawnWidth === rook[1]) {
            const inWay = bishops.filter(v => v[1] === pawnWidth);
            const minVal = rook[0] > pawnLength ? pawnLength : rook[0];
            const maxVal = rook[0] > pawnLength ? rook[0]: pawnLength;
        console.log(inWay, minVal, maxVal,rook[1], "width")
            // if (inWay.length === 0) captures+=1;

            if (inWay.length > 0 && minVal < inWay[0][0] < maxVal) {
                
            } else {
            captures+=1

            }

        }
    }
    return captures
        
};