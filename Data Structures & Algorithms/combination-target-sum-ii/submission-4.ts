class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const sorted = candidates.sort((a, b) => a - b);
        const soln: number[][] = [];

        const findCombinations = (index: number, sum: number, currCombo: number[]) => {
            const currNum = sorted[index];
            const newSum = sum + currNum;

            if (newSum > target) return;
            if (newSum === target) {
                soln.push([...currCombo, currNum]);
                return;
            }

            for (let j = index + 1; j < sorted.length; j++) {
                // only go down paths of unique children
                if (j === index + 1 || sorted[j] !== sorted[j - 1]) {
                    findCombinations(j, newSum, [...currCombo, currNum]);
                }
            }
        };

        for (let i = 0; i < sorted.length; i++) {
            // only go down paths of unique children
            if (i === 0 || sorted[i] !== sorted[i - 1]) {
                findCombinations(i, 0, []);
            }
        }

        return soln;
    }
}
