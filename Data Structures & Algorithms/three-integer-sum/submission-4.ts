class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];

        for (let a = 0; a < nums.length - 2; a++) {
            if (a - 1 >= 0 && nums[a] === nums[a - 1]) continue; 

            const target = -1 * nums[a];
            let b = a + 1;
            let c = nums.length - 1;

            while (b < c) {
                if (b !== a + 1 && nums[b] === nums[b - 1]) {
                    b++; 
                    continue; 
                }

                if (c !== nums.length - 1 && nums[c] === nums[c + 1]) {
                    c--; 
                    continue; 
                }

                const currSum = nums[b] + nums[c];
                if (currSum === target) {
                    res.push([nums[a], nums[b], nums[c]]);
                    b++;
                    c--;
                } else if (currSum < target) {
                    b++;
                } else {
                    c--;
                }
            }

        }
        return res;
    }
}
