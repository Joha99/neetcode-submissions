class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        const seen = new Set<string>();

        for (let a = 0; a < nums.length - 2; a++) {
            const target = -1 * nums[a];

            // are there 2 numbers that add up to -1 * curr;
            let b = a + 1;
            let c = nums.length - 1;

            while (b < c) {
                const currSum = nums[b] + nums[c];
                const combo = `${nums[a]}:${nums[b]}:${nums[c]}`; 
                if (currSum === target && !seen.has(combo)) {
                    res.push([nums[a], nums[b], nums[c]]);
                    seen.add(combo); 
                    b++;
                    c--;
                } else if (currSum < target) {
                    b++;
                } else {
                    c--;
                }
            }
        }

        return res;
    }
}
