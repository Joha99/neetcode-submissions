class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let lo = 0;
        let hi = 0;

        let max = 0;

        const map = {};

        while (hi < s.length) {
            const currChar = s[hi];

            if (map[currChar] !== undefined && map[currChar] >= lo) {
                if (hi - lo > max) {
                    max = hi - lo;
                }

                // set new lo to one to the right of last place the curr char was seen
                lo = Math.max(map[currChar] + 1, lo);

                // set the last seen to current index
                map[currChar] = hi;

                // update hi
                hi++;
            } else {
                map[currChar] = hi;
                hi++;
            }
        }

        return Math.max(hi - lo, max);
    }
}
