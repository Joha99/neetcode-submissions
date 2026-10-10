class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];

        const numToIndex = {};
        for (let i = 0; i < nums.length; i++) {
            numToIndex[nums[i]] = i;
        }

        const seen = new Set<string>();

        for (let a = 0; a < nums.length; a++) {
            for (let b = a + 1; b < nums.length; b++) {
                const twoSum = nums[a] + nums[b];
                const c = numToIndex[-1 * twoSum];
                const triplet = `${nums[a]}:${nums[b]}:${nums[c]}`;

                if (c !== undefined && b < c && !seen.has(triplet)) {
                    seen.add(triplet);
                    // console.log("third found", nums[a], nums[b], nums[c]);
                    res.push([nums[a], nums[b], nums[c]]);
                }
            }
        }

        return res;
    }
}
