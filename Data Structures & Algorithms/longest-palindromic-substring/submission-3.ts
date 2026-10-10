class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let result = [0, 0];

        for (let a = 0; a < s.length; a++) {
            let b = a;
            if (a + 1 < s.length && s[a] === s[a + 1]) {
                b = a + 1;
            }

            let offset = 1;
            let oddP = [a, a];

            while (a - offset >= 0 && a + offset < s.length && s[a - offset] === s[a + offset]) {
                oddP = [oddP[0] - 1, oddP[1] + 1];
                offset++;
            }

            let evenP = [a, b];
            if (a !== b) {
                offset = 1;
                while (
                    a - offset >= 0 &&
                    b + offset < s.length &&
                    s[a - offset] === s[b + offset]
                ) {
                    evenP = [evenP[0] - 1, evenP[1] + 1];
                    offset++;
                }
            }
            const oddLen = oddP[1] - oddP[0] + 1; 
            const evenLen = evenP[1] - evenP[0] + 1; 
            const longer = oddLen > evenLen ? oddP :evenP; 
            result = longer[1] - longer[0] + 1 > result[1] - result[0] + 1 ? longer : result; 
        }

        return s.slice(result[0], result[1] + 1);
    }
}
