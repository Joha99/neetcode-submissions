class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let lo = 0;
        let hi = nums.length - 1;

        while (lo <= hi) {
            const mid = lo + Math.floor((hi - lo) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return -1;
    }
}
