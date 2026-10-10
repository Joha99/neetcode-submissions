class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];

        let lastA: number; 
        for (let a = 0; a < nums.length - 2; a++) {
            if (lastA !== undefined && nums[a] === lastA) continue; 

            const target = -1 * nums[a];

            // are there 2 numbers that add up to -1 * curr;
            let b = a + 1;
            let c = nums.length - 1;

            let lastB: number; 
            let lastC: number;

            while (b < c) {
                if (lastB !== undefined && nums[b] === lastB) {
                    b++; 
                    continue; 
                }

                if (lastC !== undefined && nums[c] === lastC) {
                    c--; 
                    continue; 
                }
                
                const currSum = nums[b] + nums[c];
                if (currSum === target) {
                    res.push([nums[a], nums[b], nums[c]]);
                    lastB = nums[b]; 
                    lastC = nums[c]; 
                    b++;
                    c--;
                } else if (currSum < target) {
                    b++;
                } else {
                    c--;
                }
            }

            lastA = nums[a]; 
        }

        return res;
    }
}
