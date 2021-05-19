// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/submissions/


// 1022. Sum of Root To Leaf Binary Numbers
// Easy

// 1217

// 93

// Add to List

// Share
// You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

 

// Example 1:


// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
// Example 2:

// Input: root = [0]
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
// Example 4:

// Input: root = [1,1]
// Output: 3
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// Node.val is 0 or 1.
// Accepted
// 94,967
// Submissions
// 132,434



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
 var sumRootToLeaf = function(root) {
    let result = 0;
    dfs(root, "")
    
    function dfs(node, path) {
        if (node) {
            const strVal = `${node.val}`
            if (!node.left && !node.right) {
                const binaryNum = parseInt( path+strVal, 2 );
                result += binaryNum;
                return;
            }
            dfs(node.left, path+strVal);
            dfs(node.right, path+strVal);
        }
    }
    return result
};



const sumRootToLeaf = ({ val, left, right }, acc = '') =>
  !left && !right
    ? parseInt(acc + val, 2)
    : (left ? sumRootToLeaf(left, acc + val) : 0) +
      (right ? sumRootToLeaf(right, acc + val) : 0);