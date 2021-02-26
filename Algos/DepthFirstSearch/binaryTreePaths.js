// 257. Binary Tree Paths
// Easy

// 2377

// 125

// Add to List

// Share
// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    dfs(root, "");

    
    function dfs(root, currentPath) {
        if (root == null) return;
        
        if (root.left == null && root.right == null) {
            currentPath += root.val;            
            res.push(currentPath);
            return;
        }
        dfs(root.right, currentPath + root.val + '->');
        dfs(root.left, currentPath + root.val + '->')
    }
    return res
};