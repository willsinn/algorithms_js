// 112. Path Sum
// Easy

// 2525

// 550

// Add to List

// Share
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// Accepted
// 542,022
// Submissions
// 1,294,780
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
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
    let res = false; //outer scope exit condition.
    
    function helper(node, currentSum) { //
        if (!node) return; //if node === null exit
        if (res) return; // if true, exit loop
        
        currentSum += node.val;
        
        if (!node.left && !node.right && currentSum === sum) {
            res = true;
        }
        
        helper(node.left, currentSum);
        helper(node.right, currentSum);
        // call left and right to check tree
    }
    
    helper(root, 0); // call function
    return res;
};