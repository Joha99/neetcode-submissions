class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        const seen = new Set<number>();
        for (const num of nums) {
            if (seen.has(num)) {
                seen.delete(num);
            } else {
                seen.add(num);
            }
        }
        return seen.values().next().value;
    }
}
