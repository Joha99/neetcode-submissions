class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // return array of k number of unique elements that appear the most

        const frequency: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (frequency[num] !== undefined) {
                frequency[num]++;
            } else {
                frequency[num] = 1;
            }
        }

        const entries = Object.keys(frequency)
            .sort((a, b) => frequency[b] - frequency[a])
            .map((key) => parseInt(key));
        return entries.slice(0, k);
    }
}
