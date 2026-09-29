class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = {};
        for (const str of strs) {
            const charFrequency: number[] = Array(26).fill(0);

            // charCode of lowercase 'a' = 97
            for (let i = 0; i < str.length; i++) {
                const charCode = str.charCodeAt(i);
                charFrequency[charCode - 97] = charFrequency[charCode - 97] + 1;
            }

            // if count exceeds 9, then that char frequency takes up 2 spaces rather than 1
            // so join each frequency by , to differentiate each char frequency
            const key = charFrequency.join(",");
            if (seen[key]) {
                seen[key].push(str);
            } else {
                seen[key] = [str];
            }
        }
        return Object.values(seen);
    }
}
