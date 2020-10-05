var threeSum = function (nums) {
  //1. to find triplets: need to run a triple nested iterative loops which gives the sum of zero
  let triplets = [];
  for (let i = 0; i < nums.length; i++) {
    const firstElem = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondElem = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const thirdElem = nums[k];
        if (firstElem + secondElem + thirdElem === 0) {
          triplets.push([firstElem, secondElem, thirdElem]);
        }
      }
    }
  }
  //2. compare triplets to make sure that there are no duplicates.
  for (let i = 0; i < triplets.length; i++) {
    const triplet = triplets[i];
    for (let j = 1; j < triplets.length; j++) {
      const secondTriplet = triplets[j];
      console.log(
        secondTriplet.includes(triplet[0]) &&
          secondTriplet.includes(triplet[1]) &&
          secondTriplet.includes(triplet[2])
      );
    }
  }
  console.log(triplets);
  return triplets;
};
