class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let i = 1; // current index pointer
        let j = i; // new value pointer
        let lastSeen = nums[0];

        while (j < nums.length) {
            if (nums[j] === lastSeen) {
                j++;
            } else {
                lastSeen = nums[j]; 
                nums[i] = nums[j]; 
                i++; 
            }
            
        }

        return i;
    }
}
