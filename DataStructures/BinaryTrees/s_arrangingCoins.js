// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

var arrangeCoins = function (n) {
  //Creating steps begins at 1 coin, each new step will require an additional coin, progressively.

  //1. declare a full staircase row count and a sum of coins stacked value.

  //2. while the sum of coins <= n, continue incrementing count and adding to sum of coins.

  //3. define conditional for if n === 0
  if (n === 0) return 0;
  let coins = n;
  let count = 1;

  while (coins > 0) {
    coins -= count;
    if (coins > count) {
      count++;
    }
  }
  return count;
};
