class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // prices[i]: $ of coin on day i
        // must buy before selling
        // must wait one day after selling before buying
        // may own one coin at a time
        // a profit is made if sell price > buy price

        if (prices.length === 1) {
            return 0;
        }

        // profit after staying in cooldown period / not holding
        let prevFree = 0;
        // profit after holding last held coin
        let prevHeld = undefined;
        // profit after selling last held coin
        let prevSold = undefined;

        // at each day, i can either buy or sell or cooldown
        for (let p = 0; p < prices.length; p++) {
            // either stay free or cooldown from previous sell 
            const currentFree = prevSold !== undefined ? Math.max(prevFree, prevSold) : prevFree;

            // either keep holding previous coin or buy after previous cooldown
            const currentHeld =
                prevHeld !== undefined
                    ? Math.max(prevHeld, prevFree - prices[p])
                    : prevFree - prices[p];

            // if there's a previously held coin, sell it 
            const currentSold = prevHeld !== undefined ? prevHeld + prices[p] : undefined; 

            prevFree = currentFree;
            prevHeld = currentHeld;
            prevSold = currentSold;

            console.log(prices[p], prevFree, prevHeld, prevSold);
        }

        return Math.max(prevSold, prevFree)
    }
}
