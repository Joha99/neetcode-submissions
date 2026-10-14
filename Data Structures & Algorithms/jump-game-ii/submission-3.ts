class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        if (nums.length === 1) {
            return 0;
        }

        let jumps = 0;
        let maxDestination = Math.min(nums.length - 1, nums[0]); 

        for (let step = 1; step < nums.length; step++) {
            const currDestination = Math.min(nums.length - 1, step + nums[step]);

            // if the current step is the furthest we could go from the previous jumps, we need to update max 
            if (step === maxDestination) {
                maxDestination = currDestination; 
                jumps++; 
            } 

            // else if we are not yet at the max destination but 
            // if the destination we can reach from current step is > than the destination we can reach 
            // from the max destination, update max
            else if (currDestination > maxDestination + nums[maxDestination]) {
                maxDestination = currDestination; 
                jumps++; 
            }
        }

        return jumps;
    }
}
