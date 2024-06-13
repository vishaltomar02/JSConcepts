/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const uniqueMap = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!uniqueMap[val]) uniqueMap[val] = 1;
    else uniqueMap[val] += 1;
  }
  return Object.keys(uniqueMap).find((el) => {
    console.log(uniqueMap[el])
    return uniqueMap[el] >= nums.length / 2;
  })
};