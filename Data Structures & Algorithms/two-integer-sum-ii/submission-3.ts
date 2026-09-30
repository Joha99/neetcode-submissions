class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let lo = 0;
        let hi = numbers.length - 1;

        while (lo < hi && numbers[lo] + numbers[hi] !== target) {
            const sum = numbers[lo] + numbers[hi];

            if (sum < target) {
                lo++;
            } else {
                hi--;
            }
        }

        return [lo + 1, hi + 1];
    }
}
