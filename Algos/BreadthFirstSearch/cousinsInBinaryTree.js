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
var isCousins = function(root, x, y) {
  let queue = [];
  let depth = 1;
  
  bfs(root)
  function bfs(node) {
      if (!node) return;
      console.log(node, depth)
      queue.push({ value: node.val, depth: depth})
      depth++
      bfs(node.left);
      bfs(node.right);
  
  }
  const cousins = queue.filter(c => c.value === x || c.value === y)
  if (cousins[0].depth !== cousins[1].depth) return false
  console.log(cousins)
  // if (queue[`${x}`].depth != queue[`${y}`].depth) return false;
  
  return true;
  
};