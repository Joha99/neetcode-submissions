class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        const maxSums = { 0: nums[0], 1: Math.max(nums[0], nums[1]) };

        for (let i = 2; i < nums.length; i++) {
            // at every house, you can rob it and the house 2 houses before OR
            // don't rob the current house and rob the house before it
            const max = Math.max(maxSums[i - 1], nums[i] + maxSums[i - 2]);
            maxSums[i] = max;
        }

        return maxSums[nums.length - 1];
    }
}
