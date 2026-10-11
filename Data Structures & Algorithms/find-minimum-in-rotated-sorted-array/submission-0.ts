class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // array at some point was sorted in increasing order
        // values are unique
        // the largest value will be next to the smallest

        let lo = 0;
        let hi = nums.length - 1;

        while (lo < hi) {
            const mid = lo + Math.floor((hi - lo) / 2);

            // everything from curr to hi is in order, mid could be the min so we move hi to mid 
            if (nums[mid] < nums[hi]) {
                hi = mid;
            } else {
                // lo is bigger than the middle num
                lo = mid + 1;
            }
        }

        console.log(nums[lo]);
        return nums[lo];
    }
}
