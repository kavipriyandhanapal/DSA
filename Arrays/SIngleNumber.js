/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

//other solutuion is create a hashmap(onject here) and store the frequency of the each number by looking up the key is present or not
