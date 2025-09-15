/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let temmax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) temmax++;
    else {
      max = Math.max(max, temmax);
      temmax = 0;
    }
  }

  if (temmax !== 0) {
    max = Math.max(max, temmax);
  }

  return max;
};


//optimimal apporach
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
};
