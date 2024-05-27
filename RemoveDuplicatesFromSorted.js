var removeDuplicates = function (nums) {
  var j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
  }
  console.log(nums);
  return j + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))


// Function to remove duplicates at most twice
var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  var k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[k - 1] || nums[i] != nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};