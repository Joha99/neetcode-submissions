class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let res = 0;

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
        }

        return res;
    }
}
