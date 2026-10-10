class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let result = s[0];

        for (let a = 0; a < s.length; a++) {
            let b = a;
            if (a + 1 < s.length && s[a] === s[a + 1]) {
                b = a + 1;
            }

            let offset = 1;
            let oddMax = s[a];
            let evenMax = a !== b ? s[a] + s[b] : s[a];

            while (a - offset >= 0 && a + offset < s.length && s[a - offset] === s[a + offset]) {
                oddMax = s[a - offset] + oddMax + s[a + offset];
                offset++;
            }

            if (a !== b) {
                offset = 1;
                while (a - offset >= 0 && b + offset < s.length && s[a - offset] === s[b + offset]) {
                    evenMax = s[a - offset] + evenMax + s[b + offset];
                    offset++;
                }
            }

            // console.log("local longest", oddMax, evenMax);
            const longer = oddMax.length > evenMax.length ? oddMax : evenMax;

            result = longer.length > result.length ? longer : result;
        }

        return result;
    }
}
