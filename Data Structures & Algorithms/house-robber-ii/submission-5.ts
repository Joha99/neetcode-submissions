class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
        if (nums.length === 3) return Math.max(nums[0], Math.max(nums[1], nums[2]));

        let withFirst = [nums[0], Math.max(nums[0], nums[1])];
        let withLast = [nums[1], Math.max(nums[1], nums[2])];

        for (let h = 2; h < nums.length; h++) {
            const currHouse = nums[h];

            if (h === 2 && h !== nums.length - 1) {
                withFirst = [withFirst[1], Math.max(currHouse + withFirst[0], withFirst[1])];
            } else if (h === nums.length - 1) {
                withLast = [withLast[1], Math.max(currHouse + withLast[0], withLast[1])];
            } else {
                withFirst = [withFirst[1], Math.max(currHouse + withFirst[0], withFirst[1])];
                withLast = [withLast[1], Math.max(currHouse + withLast[0], withLast[1])];
            }
        }

        return Math.max(withFirst[1], Math.max(withLast[0], withLast[1]));
    }
}
