class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let res = 0;

        // for every char, we can assume it could be the center of a palindrome
        // look outwards from the center and if the two pointer still match, increase count
        // but we may see the same substrings  twice

        for (let a = 0; a < s.length; a++) {
            res++;

            let center = a;
            let offset = 1;
            while (
                center - offset >= 0 &&
                center + offset < s.length &&
                s[center - offset] === s[center + offset]
            ) {
                offset++;
                res++; 
            }

            let left = a; 
            let right = a + 1; 
            offset = 0; 

            while (
                left - offset >= 0 &&
                right + offset < s.length &&
                s[left - offset] === s[right + offset]
            ) {
                offset++;
                res++; 
            }

            console.log('at index', a, 'palindromes', res); 
        }

        return res; 
    }
}
