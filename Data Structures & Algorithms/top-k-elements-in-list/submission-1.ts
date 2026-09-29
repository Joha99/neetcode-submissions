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

        const reverseFrequency = Array.from({ length: nums.length }, () => []);
        for (const [num, count] of Object.entries(frequency)) {
            reverseFrequency[count - 1].push(parseInt(num));
        }

        const topK = [];
        for (let j = reverseFrequency.length - 1; j >= 0; j--) {
            const currSet = reverseFrequency[j];
            if (currSet.length > 0) {
                topK.push(...currSet);
            }
        }

        return topK.slice(0, k);
    }
}
