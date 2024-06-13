/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Optimised Approach 
  let i = m - 1, j = n - 1, k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }

  // Un-optimised approach
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < m; j++) {
  //     if (nums2[i] < nums1[j]) {
  //       const temp = nums2[i];
  //       nums2[i] = nums1[j];
  //       nums1[j] = temp;
  //     }
  //   }
  //   console.log(nums1)
  //   nums1[m] = nums2[i];
  //   m++;
  // }
  return nums1
};

console.log("merged sorted", merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))