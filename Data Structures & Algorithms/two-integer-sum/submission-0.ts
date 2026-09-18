class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // map from seen nums values to their associated indices 
        const seenValues: Record<number, number> = {}; 

        for (let i = 0; i < nums.length; i++) {
            const currentValue = nums[i]; 
            const remainder = target - currentValue; 

            // if a value needed to be added to the current value to get target was already seen, we found the solution
            if (seenValues[remainder] !== undefined) {
                const solution = [seenValues[remainder], i]; 
                return solution;

            } else {
                seenValues[currentValue] = i; 
            }
        }

        return []; 
    }
}
