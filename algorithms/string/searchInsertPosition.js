// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    //3 conditionals,
    //1. if element is larger, return current index cause you wanna insert in front of the element.
    if (elem > target) {
      return i;
    }
    //2. if element is same return index
    if (elem === target) {
      return i;
    }
  }
  return nums.length;
};
