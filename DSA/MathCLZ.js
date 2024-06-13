function clz32(num) {
  // your code here
  num >>>= 0;
  if (num === 0) {
    return 32;
  }
  let count = 0;
  while (num > 0) {
    count++;
    num >>>= 1;
  }
  return 32 - count;
}
