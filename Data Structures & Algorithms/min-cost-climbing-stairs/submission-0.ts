class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const dp = {};

        for (let i = cost.length - 1; i >= 0; i--) {
            if (i + 1 === cost.length || i + 2 === cost.length) {
                dp[i] = cost[i];
            } else {
                dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
            }
            console.log("step", i, "cost to top from i", dp[i]);
        }
        return Math.min(dp[0], dp[1]);
    }
}
