class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let smallestPurchase = prices[0];

        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i] > smallestPurchase) {
                continue;
            }
            smallestPurchase = prices[i];
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[j] - prices[i] > maxProfit) {
                    maxProfit = prices[j] - prices[i];
                }
            }
        }

        return maxProfit;
    }
}
