class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        // there's always 1 way to reach n using single steps
        const dp = {0: 1}; 

        for (let i = 1; i <= n; i++) {
            let total = 0; 
            if (dp[i - 1] !== undefined) {
                total += dp[i - 1]; 
            }
            if (dp[i - 2] !== undefined) {
                total += dp[i - 2]; 
            }
            dp[i] = total; 
        }

        return dp[n];
    }
}
