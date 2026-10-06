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
            const currSum = sum + currNum;

            if (currSum > target) return;
            if (currSum === target) {
                soln.push([...currCombo, currNum]);
                return;
            }

            currCombo.push(currNum);
            for (let j = index + 1; j < sorted.length; j++) {
                const child = sorted[j];
                // don't keep searching additional children if the child's value + current sum exceeds target
                if (currSum + child > target) break;
                // only go down paths of unique children
                if (j === index + 1 || child !== sorted[j - 1]) {
                    findCombinations(j, currSum, currCombo);
                }
            }
            currCombo.pop(); 
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
