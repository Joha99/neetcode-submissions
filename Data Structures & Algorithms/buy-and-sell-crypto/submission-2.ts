class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let smallestPurchasePrice = prices[0];

        for (let sell = 1; sell < prices.length; sell++) {
            if (prices[sell] - smallestPurchasePrice > maxProfit) {
                maxProfit = prices[sell] - smallestPurchasePrice; 
            }

            if (prices[sell] < smallestPurchasePrice) {
                smallestPurchasePrice = prices[sell]; 
            }
        }

        return maxProfit;
    }
}
