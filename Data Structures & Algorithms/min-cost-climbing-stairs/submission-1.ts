class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const dp = [cost[cost.length - 2], cost[cost.length - 1]];

        for (let i = cost.length - 3; i >= 0; i--) {
            const newCost = cost[i] + Math.min(dp[0], dp[1]);
            dp[1] = dp[0];
            dp[0] = newCost;
        }

        return Math.min(dp[0], dp[1]);
    }
}
