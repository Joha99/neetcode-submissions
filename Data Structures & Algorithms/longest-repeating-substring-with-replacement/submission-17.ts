class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const windowCounts = new Array(26).fill(0);
        let mostFreqChar = s.charCodeAt(0) - 65;

        let globalMax = 1;
        let lo = 0;

        for (let hi = 0; hi < s.length; hi++) {
            const hiCharIndex = s.charCodeAt(hi) - 65;
            windowCounts[hiCharIndex]++;

            if (windowCounts[hiCharIndex] > windowCounts[mostFreqChar]) {
                mostFreqChar = hiCharIndex;
            }

            while (lo < hi) {
                const maxCount = Math.max(...windowCounts);

                if (hi - lo + 1 - maxCount > k) {
                    windowCounts[s.charCodeAt(lo) - 65]--;
                    lo++;
                } else {
                    break; 
                }
            }

            // now we have a valid substring
            const newLen = hi - lo + 1;
            if (newLen > globalMax) {
                globalMax = newLen;
            }
        }

        return globalMax;
    }
}
