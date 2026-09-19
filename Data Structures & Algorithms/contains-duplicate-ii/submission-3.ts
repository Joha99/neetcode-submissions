class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const seen: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            if (seen[nums[i]] === undefined) {
                seen[nums[i]] = i;
            } else if (i - seen[nums[i]] <= k) {
                return true;
            } else {
                seen[nums[i]] = i; 
            }
        }

        return false; 
    }
}
