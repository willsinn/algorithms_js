// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

// Constraints:

// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  //Cousins are values that have the same depth but diff parents, go through both sides of the binary and match the values to return the depth of X & depth of Y.
  let leftRoot = root;
  let depth = 0;
  let leftDepth;
  while (leftRoot.val !== null) {
    if (leftRoot.val === x || leftRoot.val === y) {
      return (leftDepth = depth);
    }
    leftRoot = leftRoot.left;
    depth++;
  }

  console.log(leftDepth);
};
