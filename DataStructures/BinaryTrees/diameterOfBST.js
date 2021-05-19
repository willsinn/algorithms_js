// 543. Diameter of Binary Tree
// Easy

// 4727

// 293

// Add to List

// Share
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100
// Accepted
// 478,289
// Submissions
// 958,003

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
 * @return {number}
 */
 const diameterOfBinaryTree = function(root) {
    if (!root.left && root.right) return 0;
    let length = 0;
    dfs(root, length);
    
    function dfs(node, len) {
        if (!node) return;
        
        if (!node.left && !node.right) {
            return len;
        }
        console.log(len)

        dfs(node.left, length+1);
        dfs(node.right, length+1);
    }
    console.log(length)
    
};