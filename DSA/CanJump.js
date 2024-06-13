var canJump = function (nums) {
  let goal = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    //Below conditions means that we ca definitely reach to the current goal
    //if current pos + max jump is greater than equal to goal positions
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal === 0;
};
console.log(canJump([2, 3, 1, 1, 4]));