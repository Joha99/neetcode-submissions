class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        const maxSum = [nums[0]]; 
        let globalMax = nums[0]; 

        for (let i = 1; i < nums.length;i++) {
            const max = Math.max(nums[i], nums[i] + maxSum[i - 1]); 
            globalMax = Math.max(globalMax, max);
            maxSum.push(max); 
        }

        console.log(maxSum, globalMax); 
        return globalMax; 
    }
}
