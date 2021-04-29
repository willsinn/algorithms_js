// 206. Reverse Linked List
// Easy

// 6850

// 129

// Add to List

// Share
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// Accepted
// 1,381,530
// Submissions
// 2,095,678

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null, next = null;
    while (head) {
        next = head.next  //1. Save the next item in list 
        head.next = prev; //2. Initializes new list node by copying prev(creates null node for end of list)
        prev = head;    //3. Assign new value to head of prev
        head = next;        //4. Assign new value to head of head
        console.log(prev)
    }
    return prev;
};