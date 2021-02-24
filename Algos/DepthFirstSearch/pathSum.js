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

const hasPathSum = function(root, sum) {

let arr = [];
    
    for (props in root) {
        const currentVal = root.val;
        arr.push(currentVal);
        root = root.left
        console.log(props, root.val)
    }
}