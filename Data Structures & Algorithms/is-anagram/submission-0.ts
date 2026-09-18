class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const charCount: Record<string, number> = {}; 

        for (let i = 0; i < s.length; i++) {
            const currChar = s[i]; 
            if (charCount[currChar]) {
                charCount[currChar]++; 
            } else {
                charCount[currChar] = 1; 
            }
        }

        for (let j = 0; j < t.length; j++) {
            const currChar = t[j];
            // if t has a char that's not in s OR 
            // t has more of the same characters, return false
            if (!charCount[currChar]) {
                return false;
            } else if (charCount[currChar] === 0) {
                return false; 
            } else {
                charCount[currChar]--;
            }
        }

        return true;
    }
}
