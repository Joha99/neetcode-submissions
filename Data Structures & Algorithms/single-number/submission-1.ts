class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        // 3, 2, 3 in bits is 11, 10, 11 
        // 5, 7, 5 ->  101, 111, 101
        // a number XORed with itself is 0
        // a number XOR with 0 is itself 

        let xored = 0; 
        for (const num of nums) {
            xored = xored ^ num; 
        }
        return xored;
    }
}
