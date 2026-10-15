class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        // nums[i] = max length of jump
        // each step can be associated with a jump number

        if (nums.length === 1) {
            return 0;
        }

        let currJumpMax = nums[0];
        let nextJumpMax = nums[0];
        let jumpCount = 1;

        for (let step = 0; step < nums.length; step++) {
            const destination = Math.min(nums.length - 1, step + nums[step]);

            // if we are within the current jump window, update the next jump window's max
            if (step <= currJumpMax && destination > nextJumpMax) {
                nextJumpMax = destination;
            }

            // if we have crossed into the next jump window, set the current jump's max to the max that was calculated in the previous jump window
            // set nextJumpMax to current step's destination. this will be updated as we traverse through the current jump window
            else if (step > currJumpMax) {
                currJumpMax = nextJumpMax;
                nextJumpMax = destination;
                jumpCount++;
            }
            console.log(
                "step",
                step,
                "destination",
                destination,
                "jump",
                jumpCount,
                "currMax",
                currJumpMax,
                "nextMax",
                nextJumpMax,
            );
        }

        return jumpCount;

        // nums: 2, 4, 1, 1, 1, 1
        // jump: 0, 1, 1, 2, 2, 2
        // reach:2, 5, 3, 4, 5, 6

        // nums: 2, 1, 2, 1, 0
        // jump: 0, 1, 1, 2, 2

        // i:    0, 1, 2, 3, 4
        // nums: 1, 1, 2, 1, 1
        // jump: 0, 1, 2, 3, 3
    }
}
