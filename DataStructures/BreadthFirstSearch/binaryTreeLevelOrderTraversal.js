// 102. Binary Tree Level Order Traversal
// Medium

// 4289

// 102

// Add to List

// Share
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000
// Accepted
// 783,853
// Submissions
// 1,383,412


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    //1. keep track of how many elems in each row (1,2,4,8) max. Add root to queue (first row).
    //2. Shift elem off queue.
    //4. Push to row, push row to result
    if (!root) {
        return result;
    }
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let row = [];
        let rowSize = queue.length;
        
        while (rowSize > 0) {
            let currentNode = queue.shift();
            
            //3. Check if elem has children, add children to queue (not null).
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            
            row.push(currentNode.val);
            rowSize--;
        }
        result.push(row);
        
    }
    return result
    
};