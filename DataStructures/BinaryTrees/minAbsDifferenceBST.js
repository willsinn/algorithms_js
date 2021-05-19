//https://leetcode.com/problems/minimum-absolute-difference-in-bst/

// 530. Minimum Absolute Difference in BST
// Easy

// 1272

// 93

// Add to List

// Share
// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105
 

// Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

// Accepted
// 114,162
// Submissions
// 206,775


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
 var getMinimumDifference = function(root) {
    let res = Infinity;
    let arr = [];
    dfs(root) 
    
    function dfs(node) {
        if (node) {
            arr.push(node.val)
            dfs(node.left)
            dfs(node.right)
            
        }
    }
    arr = arr.sort((a,b) => {
        return a - b;
    })
    let prev = arr[0];
    for (let i=1;i<arr.length;i++) {
        const current = arr[i]
        const difference = Math.abs(prev - current);
        if (difference < res) {
            res = difference;
        }
        prev = current;
    }
    return res;
};