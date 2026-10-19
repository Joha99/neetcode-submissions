class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {

        // map between {index}:{sum} to count of combinations in that tree that sum to amount
        const seen = new Map<string, number>();

        const findCoinChange = (index: number, sum: number): number => {
            const mapKey = `${index}:${sum}`;

            if (sum > amount) {
                return 0;
            }

            if (seen.has(mapKey)) {
                return seen.get(mapKey);
            }

            if (sum === amount) {
                return 1;
            }

            let combinationCount = 0;

            for (let i = index; i < coins.length; i++) {
                const numResults = findCoinChange(i, sum + coins[i]);
                combinationCount += numResults;
            }

            seen.set(mapKey, combinationCount);
            return combinationCount;
        };

        return findCoinChange(0, 0);
    }
}
