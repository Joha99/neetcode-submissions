class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        nums.sort();
        const midpoint = Math.floor(nums.length / 2); 
        return nums[midpoint]; 
    }
}
