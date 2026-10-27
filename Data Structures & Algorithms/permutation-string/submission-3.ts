class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1CharMap: Record<string, number> = {};
        const s2CharMap: Record<string, number> = {};

        const mapsAreSame = () => {
            for (const entry of Object.entries(s1CharMap)) {
                if (s2CharMap[entry[0]] === entry[1]) {
                    continue;
                }
                return false;
            }
            return true;
        };

        for (let i = 0; i < s1.length; i++) {
            s1CharMap[s1[i]] = (s1CharMap[s1[i]] ?? 0) + 1;
            s2CharMap[s2[i]] = (s2CharMap[s2[i]] ?? 0) + 1;
        }

        if (mapsAreSame()) return true;

        for (let i = s1.length; i < s2.length; i++) {
            const char = s2[i];
            s2CharMap[s2[i - s1.length]]--;
            s2CharMap[char] = (s2CharMap[char] ?? 0) + 1;
            
            if (mapsAreSame()) return true;
        }

        return false;
    }
}
