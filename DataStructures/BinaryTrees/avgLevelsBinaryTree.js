// 637. Average of Levels in Binary Tree
// Easy

// 1518

// 173

// Add to List

// Share
// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.


//JS BFS
// Another method to solve the given problem is to make use of a Breadth First Search. In BFS, we start by pushing the root node into a queuequeue. Then, we remove an element(node) from the front of the queuequeue. For every node removed from the queuequeue, we add all its children to the back of the same queuequeue. We keep on continuing this process till the queuequeue becomes empty. In this way, we can traverse the given tree on a level-by-level basis.

// But, in the current implementation, we need to do a slight modification, since we need to separate the nodes on one level from that of the other.

// The steps to be performed are listed below:

// Put the root node into the queuequeue.

// Initialize sumsum and countcount as 0 and temptemp as an empty queue.

// Pop a node from the front of the queuequeue. Add this node's value to the sumsum corresponding to the current level. Also, update the countcount corresponding to the current level.

// Put the children nodes of the node last popped into the a temptemp queue(instead of queuequeue).

// Continue steps 3 and 4 till queuequeue becomes empty. (An empty queuequeue indicates that one level of the tree has been considered).

// Reinitialize queuequeue with its value as temptemp.

// Populate the resres array with the average corresponding to the current level.

// Repeat steps 2 to 7 till the queuequeue and temptemp become empty.

// At the end, resres is the required result.

// The following animation illustrates the process.