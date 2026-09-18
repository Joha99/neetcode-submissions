class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let maxPrefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            const currStr = strs[i]; 
            const lastIndex = Math.min(maxPrefix.length, currStr.length);
            let matchedPrefix = ""; 

            for (let j = 0; j < lastIndex; j++) {
                if (maxPrefix[j] !== currStr[j]) {
                    break;
                } else {
                    matchedPrefix += currStr[j]; 
                }
            }

            if (matchedPrefix.length < maxPrefix.length) {
                maxPrefix = matchedPrefix; 
            }
        }

        return maxPrefix;
    }
}
