// Given a complete binary tree, count the number of nodes.

// Note:

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Example:

// Input:
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// Output: 6

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
var countNodes = function (root) {
  console.log(root.val, root.left, root.right);
  //Given the conditional returns of the TreeNode, node.val must be greater than 0 to be counted.
  if (root == null) return 0;
  //1. declare left and right nodes with nodeHeights, declare while loops to move down node tree for both right and left nodes.

  //2. declare recursive function for both right and left nodes based with root.val returning 0

  //3. add nodes counted from both right, left and highest level for the total nodes per tree.
};
