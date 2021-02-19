// 108. Convert Sorted Array to Binary Search Tree
// Easy

// 3430

// 258

// Add to List

// Share
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Start at the middle of the array, break it into two then continue breaking it into two.
    // 1. figure out height of the tree.

    // TREES ARE OBJECTS. Think of them as nested objects
    // BST requires left node to be less than parent, right to be greater than parent.
    // BSTs have two leaf nodes.
}