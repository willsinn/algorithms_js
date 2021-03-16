// 606. Construct String from Binary Tree
// Easy

// 924

// 1266

// Add to List

// Share
// You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

// The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

// Example 1:
// Input: Binary tree: [1,2,3,4]
//        1
//      /   \
//     2     3
//    /    
//   4     

// Output: "1(2(4))(3)"

// Explanation: Originallay it needs to be "1(2(4)())(3()())", 
// but you need to omit all the unnecessary empty parenthesis pairs. 
// And it will be "1(2(4))(3)".
// Example 2:
// Input: Binary tree: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \  
//       4 

// Output: "1(2()(4))(3)"

// Explanation: Almost the same as the first example, 
// except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
// Accepted
// 98,368
// Submissions
// 177,762

//Notes

/*There are 4 cases to check:

1. the current node is null, return empty string
2. both left and right nodes are null, return the root value, e.g. "1"
3. only the right node is null, return root value and left value, e.g. "1(2)"
4. both left and right nodes are not null, return both left and right values, e.g. "1(2)(3)"*/