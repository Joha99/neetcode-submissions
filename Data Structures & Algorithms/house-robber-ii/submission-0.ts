class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        let withFirst = [0, 0];
        let withLast = [0, 0];

        for (let h = 0; h < nums.length; h++) {
            const currHouse = nums[h];
            if (h === 0) {
                withFirst[0] = currHouse;
            } else if (h === 1) {
                withFirst[1] = Math.max(withFirst[0], currHouse);
                withLast[0] = currHouse;
            } else if (h === 2) {
                if (h !== nums.length - 1) {
                    withFirst = [withFirst[1], Math.max(currHouse + withFirst[0], withFirst[1])];
                    withLast[1] = Math.max(withLast[0], currHouse);
                } else {
                    withLast[1] = Math.max(nums[1], currHouse);
                }
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
