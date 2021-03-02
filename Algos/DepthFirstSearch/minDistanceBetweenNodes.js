// 783. Minimum Distance Between BST Nodes
// Easy

// 949

// 245

// Add to List

// Share
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105

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
var minDiffInBST = function(root) {
    let nums = {
        low: null,
        high: null
    }
    const dfs = (node, low, high) => {
        if (!node) return;
        
        if (!low || !high) {
            nums.low = node.val;
            high = node.val
        }
        
        if (low === high) {
            if (node.val > low) {
                high = node.val
            }
            if (node.val < low) {
                low = node.val
            }
        }
        
        if (low < node.val < high) {
        }
        
        dfs(node.left, low, high)
        dfs(node.right, low, high)
        
    }
        dfs(root, nums.low, nums.high)
    console.log(nums)

};