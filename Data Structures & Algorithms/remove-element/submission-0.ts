class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // find how many elements (k) that are not val 
        // reorder nums such that first k elements are not val 

        // 1. keep a left and right pointer 
        // if left pointer meets val, swap current with right
        // move right by -1 and left by + 1 

        let left = 0; 
        let right = nums.length - 1; 
        let k = 0; 

        while (left <= right) {
            console.log(nums, left, right); 
            // if (nums[right] === val) {
            //     right--; 
            //     continue; 
            // }

            if (nums[left] === val) {
                [nums[left], nums[right]] = [nums[right], nums[left]]; 
                right--; 
                continue; 
            }

            k++; 
            left++; 
        }

        return k;
    }
}
