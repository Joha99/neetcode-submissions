class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const store: Record<string, number> = {};

        // at each index, you can either remove p from text1, or remove q from text2 or both
        const findSubsequence = (p: number, q: number) => {
            const key = `${p},${q}`;

            if (p === text1.length || q === text2.length) {
                return 0;
            }

            if (store[key] !== undefined) {
                return store[key];
            }

            if (text1[p] === text2[q]) {
                const length = 1 + findSubsequence(p + 1, q + 1);
                store[key] = length;
                return length;
            }

            const withoutFirst = findSubsequence(p + 1, q);
            // store[`${p + 1},${q}`] = withoutFirst;
            const withoutSecond = findSubsequence(p, q + 1);
            // store[`${p},${q + 1}`] = withoutSecond;
            const withoutEither = findSubsequence(p + 1, q + 1);
            // store[`${p + 1},${q + 1}`] = withoutEither;
            const maxLength = Math.max(withoutFirst, withoutSecond, withoutEither);
            store[`${p},${q}`] = maxLength; 
            return maxLength;
        };

        findSubsequence(0, 0);
        return store[`0,0`];
    }
}
