class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let maxReachable = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (maxReachable >= i) {
                maxReachable = Math.max(maxReachable, i + nums[i]);
            } else {
                return false;
            }
        }

        return true;
    }
}
