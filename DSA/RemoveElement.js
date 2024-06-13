var removeElement = function (nums, val) {
  // Un-Optimised Approach
  // var j = 0;
  // var i = 0;
  // while (i < (nums.length)) {
  //   console.log(i)
  //   if (nums[j] === val) {
  //     if (nums[i] !== val) {
  //       nums[j] = nums[i];
  //       nums[i] = val
  //       j++;
  //     }
  //   }
  //   else if (nums[j] !== val && nums[i] === val) j = i;
  //   else j++
  //   i++
  // }
  // return j;

  //Optimised Approach

  var count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
};

console.log(removeElement([3, 3, 2], 3));