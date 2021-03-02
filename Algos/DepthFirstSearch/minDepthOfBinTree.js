// 111. Minimum Depth of Binary Tree
// Easy

// 2187

// 795

// Add to List

// Share
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
 

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000
// Accepted
// 527,945
// Submissions
// 1,334,795

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
var minDepth = function(root) {
    let depth = 1;
    let allDepths = [];
    dfs(root)
    function dfs(node) {
        if (!node) return;
        
        depth++;
        console.log(node.val)
        if (!node.left && !node.right) {
            allDepths.push(depth)
            depth = 1;
        }
        dfs(node.left)
        dfs(node.right)
        
    }
    const sortedDepths = allDepths.sort()
    return sortedDepths[0];
};