/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxReturns = 0;
  let lastMaxDayBought = null;
  for (let i = 0; i < prices.length; i++) {
    if (lastMaxDayBought && lastMaxDayBought < prices[i]) continue;
    for (let j = i + 1; j < prices.length; j++) {
      console.log(prices[j])
      if (prices[j] < prices[i]) continue;
      const profit = prices[j] - prices[i];
      if (profit > 0 && profit > maxReturns) {
        maxReturns = profit;
        lastMaxDayBought = prices[i];
      }
    }
  }
  return maxReturns;
};

console.log(maxProfit([2, 1, 4, 45, 19, 1, 29, 10, 30, 29, 493, 432, 1000, 33, 2000, 32, 3321, 1292]))