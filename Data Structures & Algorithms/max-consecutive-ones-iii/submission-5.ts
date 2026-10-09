class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums: number[], k: number): number {
        // given some window, the # of 0s you need to flip to get all 1s must be <= k
        // need to figure out:
        // - how many 1s are in the current window?
        // - how many 0s are in the current window?

        let lo = 0;
        const windowCount = [0, 0];
        let max = 0;

        for (let hi = 0; hi < nums.length; hi++) {
            const curr = nums[hi]; // will be 0 or 1
            windowCount[curr]++;

            while (hi - lo + 1 - windowCount[1] > k) {
                windowCount[nums[lo]]--;
                lo++;
            }

            const newLen = hi - lo + 1;
            if (newLen > max) {
                max = newLen;
            }
        }

        return max;
    }
}
