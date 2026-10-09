class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const soln: number[][] = [];

        // each number can be chosen to be added now or later for a different permutation
        const findPermutations = (i: number, chosen: Set<number>) => {
            if (chosen.size + 1 === nums.length) {
                soln.push([...chosen, nums[i]]);
                return;
            }

            chosen.add(nums[i]);
            for (let j = 0; j < nums.length; j++) {
                if (!chosen.has(nums[j])) {
                    findPermutations(j, chosen);
                }
            }
            chosen.delete(nums[i]);
        };

        const set = new Set<number>();
        for (let n = 0; n < nums.length; n++) {
            set.clear(); 
            findPermutations(n, set);
        }

        return soln;
    }
}
