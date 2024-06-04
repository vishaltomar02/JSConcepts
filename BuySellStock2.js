/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxReturns = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let currDayBuyNextDaySell = prices[i + 1] - prices[i];
    maxReturns += currDayBuyNextDaySell < 0 ? 0 : currDayBuyNextDaySell;
  }
  return maxReturns;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))