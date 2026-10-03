class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const subsets: number[][] = [[]];

        for (const num of nums) {
            const additions: number[][] = []; 
            for (let s = 0; s < subsets.length; s++) {
                const currSubset = subsets[s]; 
                additions.push([...currSubset, num]); 
            }
            subsets.push(...additions); 
            console.log('num', num, 'subsets', subsets)
        }

        return subsets; 
    }
}
