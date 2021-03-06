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


//JS BFS, queue.
// https://medium.com/@jpoechill/iterative-bfs-and-dfs-in-javascript-537bb7b0bbfd
function traverseBFS(root) {
    let queue = [root]
    let res = []
    
    while (queue.length) {      
      let curr = queue.shift()
      res.push(curr.key)
      
      if (curr.right){
        queue.push(curr.right)
      }
      
      if (curr.left){
        queue.push(curr.left)
      }
    }
    
    return res
  }