// 404. Sum of Left Leaves
// Easy

// 1808

// 172

// Add to List

// Share
// Given the root of a binary tree, return the sum of all left leaves.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -1000 <= Node.val <= 1000
// Accepted
// 242,709
// Submissions
// 463,767

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
 var sumOfLeftLeaves = function(node, isLeft = false) {

    if (!node) {
return 0;
}
if (isLeft && !node.left && !node.right) {
return node.val;
}
let sum = 0;
sum += sumOfLeftLeaves(node.left, true);
sum += sumOfLeftLeaves(node.right, false);
return sum;

};