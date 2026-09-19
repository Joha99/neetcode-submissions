class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let left = 0; 
        let right = nums.length - 1; 

        while (left <= right) {
            if (nums[right] === val) {
                right--; 
                continue; 
            }
            if (nums[left] === val) {
                nums[left] = nums[right];
                right--; 
                continue; 
            }
            left++; 
        }
        return left;
    }
}
