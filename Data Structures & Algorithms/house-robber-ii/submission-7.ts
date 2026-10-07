class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        let withFirst = [nums[0], Math.max(nums[0], nums[1])];
        let withLast = [nums[1], Math.max(nums[1], nums[2])];

        for (let f = 2; f < nums.length - 1; f++) {
            withFirst = [withFirst[1], Math.max(nums[f] + withFirst[0], withFirst[1])];
        }

        for (let l = 3; l < nums.length; l++) {
            withLast = [withLast[1], Math.max(nums[l] + withLast[0], withLast[1])];
        }

        return Math.max(withFirst[1], Math.max(withLast[0], withLast[1]));
    }
}
