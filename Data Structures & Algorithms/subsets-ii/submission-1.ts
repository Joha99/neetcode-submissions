class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const soln: number[][] = [[]];

        const findSubsets = (index: number, subset: number[]) => {
            const newSubset = [...subset, nums[index]];
            soln.push(newSubset);

            for (let i = index + 1; i < nums.length; i++) {
                if (i === index + 1 || nums[i - 1] != nums[i]) {
                    findSubsets(i, newSubset);
                }
            }
        };

        for (let i = 0; i < nums.length; i++) {
            if (i === 0 || nums[i - 1] !== nums[i]) {
                findSubsets(i, []);
            }
        }

        console.log(soln);

        return soln;
    }
}
