class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen: Record<string, string[]> = {};

        for (const str of strs) {
            const sorted = [...str].sort().join(""); 

            if (!seen[sorted]) {
                seen[sorted] = [str]; 
            } else {
                seen[sorted].push(str); 
            }
        } 

        console.log('seen', Object.values(seen)); 


        return Object.values(seen);

    }
}
