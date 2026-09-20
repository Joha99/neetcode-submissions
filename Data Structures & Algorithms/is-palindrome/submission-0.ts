class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const compareStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
        console.log(compareStr)
        let lo = 0; 
        let hi = compareStr.length - 1; 

        while (lo <= hi) {
            if (compareStr[lo] !== compareStr[hi]) {
                return false; 
            }
            lo++; 
            hi--; 
        }

        return true; 
    }
}
