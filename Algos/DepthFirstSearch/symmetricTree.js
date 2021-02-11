// 101. Symmetric Tree
// Easy

// 5472

// 141

// Add to List

// Share
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3
 

// Follow up: Solve it both recursively and iteratively.

// Accepted
// 809,012
// Submissions
// 1,687,608


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
 * @return {boolean}
 */


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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) { //Checks if root exists, if not it is a perfect mirror
        return true
    }
    function isMirror(s, t) {
        console.log(s, "I am S")
        console.log(t, "I am T")
        
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.val !== t.val) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};



// solved with stack


var isSymmetric = function(root) {
    if (!root) { //Checks if root exists, if not it is a perfect mirror
        return true
    }
function isMirror(p, q) {
    // Create two stacks
    var s1 = [p], s2 = [q];

    // Perform preorder traversal
    while (s1.length > 0 || s2.length > 0) {
        var n1 = s1.pop(), n2 = s2.pop();

        // Two null nodes, let's continue
        if (!n1 && !n2) continue;

        // Return false as long as there is a mismatch
        if (!n1 || !n2 || n1.val !== n2.val) return false;

        // Scan tree s from left to right
        // and scan tree t from right to left
        s1.push(n1.left); s1.push(n1.right);
        s2.push(n2.right); s2.push(n2.left);
    }

    return true;
}
}