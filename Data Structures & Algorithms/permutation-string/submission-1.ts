class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const uniqueChars = new Set([...s1]); 
        const sortedS1 = [...s1].sort().join(""); 

        for (let i = 0; i <= s2.length - s1.length; i++) {
            console.log('i', i)
            const char = s2[i]; 
            if (uniqueChars.has(char)) {
                const substr = s2.substring(i, i + s1.length); 
                const sorted = [...substr].sort().join(""); 
                if (sorted === sortedS1) return true; 
            }
        }
        return false; 
    }
}
