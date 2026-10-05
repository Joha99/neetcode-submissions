const findCombinations = (
    nums: number[],
    i: number,
    sum: number,
    target: number,
    currCombination: number[],
    combinations: number[][],
) => {
    const num = nums[i];
    const newSum = sum + num;

    if (newSum > target) {
        return;
    }

    if (newSum === target) {
        combinations.push([...currCombination, nums[i]]);
        return;
    }

    for (let j = i; j < nums.length; j++) {
        findCombinations(nums, j, newSum, target, [...currCombination, nums[i]], combinations);
    }
};

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const combinations: number[][] = [];

        for (let i = 0; i < nums.length; i++) {
            findCombinations(nums, i, 0, target, [], combinations);
        }

        return combinations;
    }
}
