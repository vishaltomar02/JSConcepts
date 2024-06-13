/**
 * @param {number[]} prices
 * @return {number}
 */

//OPTIMISED APPROACH
var maxProfit = function (prices) {
  let maxReturns = 0, profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let currProfit = prices[i + 1] - prices[i];
    profit += currProfit;
    if (profit < 0) profit = 0;
    if (profit > maxReturns) maxReturns = profit;
  }
  return maxReturns;
}

// BRUTE FORCE APPROACH
var maxProfit = function (prices) {
  let maxReturns = 0;
  let lastMaxDayBought = null;
  for (let i = 0; i < prices.length; i++) {
    if (lastMaxDayBought && lastMaxDayBought < prices[i]) {
      console.log("prices", prices[i])
      continue;
    }
    for (let j = i + 1; j < prices.length; j++) {
      {
        console.log("inside inner function", prices[i])
      }
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

console.log(maxProfit([7, 1, 5, 3, 6, 4]))