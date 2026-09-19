class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let i = 1; // current index pointer
        let j = i; // new value pointer

        while (j < nums.length) {
            if (nums[j] === nums[i-1]) {
                j++;
            } else {
                nums[i] = nums[j]; 
                i++; 
            }
            
        }

        return i;
    }
}
