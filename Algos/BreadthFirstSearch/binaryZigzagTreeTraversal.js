// 103. Binary Tree Zigzag Level Order Traversal
// Medium

// 3162

// 125

// Add to List

// Share
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
// Accepted
// 482,157
// Submissions
// 961,026


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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    let level = 1;

    while (queue.length > 0) {
        let subList = [];
        let isEvenLevel = level % 2 === 1;
       const levelLength = queue.length;
        for (let i=0;i < levelLength; i++) {
            let node;
            if (isEvenLevel) {
               node = queue.shift();
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            } else {
                node = queue.pop()
                if (node.right) queue.unshift(node.right)
                if (node.left) queue.unshift(node.left)
            }
            subList.push(node.val)
        }
        level++;
        result.push(subList)
        
    }
    return result

};