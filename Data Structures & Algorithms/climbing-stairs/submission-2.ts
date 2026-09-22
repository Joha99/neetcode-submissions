class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n === 1) return 1; 
        if (n === 2) return 2; 

        const dp = [1, 2]; 

        for (let i = 3; i <=n; i++) {
            const sum = dp[0] + dp[1]; 
            dp[0] = dp[1]; 
            dp[1] = sum;  
        }

        return dp[1]; 
    }
}
