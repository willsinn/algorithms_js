// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //With a pointer that declares elem value check if next elem value is equivalent, if so, return true, if not, iterate through array looking for duplicate.

  //1. define upper level for loop as pointer
  const arr = nums.sort();
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;

  //2. define nested loop with depth parameter of 1 to compare values for dupes
};
