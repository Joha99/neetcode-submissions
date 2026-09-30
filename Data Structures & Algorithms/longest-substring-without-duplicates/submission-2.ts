class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let lo = 0;
        let hi = 0;

        let locMax = 0;
        let max = 0;

        let map = {};

        while (hi < s.length) {
            const currChar = s[hi];

            if (map[currChar] !== undefined) {
                if (map[currChar] < lo) {
                    delete map[currChar];
                } else {
                    if (locMax > max) {
                        max = locMax;
                    }
                    // set new lo to one to the right of last place the curr char was seen
                    lo = map[currChar] + 1;

                    // set the last seen to current index
                    map[currChar] = hi;

                    // update local max after updating the new start index
                    locMax = hi - lo + 1;

                    // update hi
                    hi++;
                }
            } else {
                map[currChar] = hi;
                hi++;
                locMax++;
            }
        }

        return locMax > max ? locMax : max;
    }
}
