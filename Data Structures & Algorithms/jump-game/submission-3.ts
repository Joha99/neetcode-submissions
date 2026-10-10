class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const history: Record<number, boolean> = {}; 

        const jump = (i: number): boolean => {
            // over jump
            if (i >= nums.length) {
                return false;
            }

            // reached the last index
            if (i === nums.length - 1) {
                return true;
            }

            if (history[i] !== undefined) {
                return history[i];
            }

            // from the current index, you can take at most nums[i]
            // try the max jump, and decrease if you can't
            for (let dist = nums[i]; dist > 0; dist--) {
                const canReachEnd = jump(i + dist);
                history[i] = canReachEnd; 

                if (canReachEnd) {
                    return true;
                }
            }

            history[i] = false; 
            return false;
        };

        return jump(0);
    }
}
