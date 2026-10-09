class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const soln: number[][] = [];
        const seen: boolean[] = new Array(nums.length).fill(false);
        const currentPath: number[] = [];

        const findPermutations2 = (path: number[], seen: boolean[]) => {
            if (path.length === nums.length) {
                soln.push([...path]);
                return;
            }

            for (let s = 0; s < seen.length; s++) {
                if (!seen[s]) {
                    seen[s] = true;
                    path.push(nums[s]);

                    findPermutations2(path, seen);

                    seen[s] = false;
                    path.pop();
                }
            }
        };

        findPermutations2(currentPath, seen);
        return soln;
    }
}
