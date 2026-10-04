class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const completeRounds = Math.floor(h / piles.length);

        let max = piles[0];
        for (const pile of piles) {
            if (pile > max) {
                max = pile;
            }
        }

        let lo = 0;
        let hi = Math.ceil(max / completeRounds);

        while (lo <= hi) {
            const mid = lo + Math.floor((hi - lo) / 2);

            let currTotal = 0;

            for (const pile of piles) {
                const totalHoursToFinish = Math.ceil(pile / mid);
                currTotal += totalHoursToFinish;
            }

            if (currTotal > h) {
                // we are not eating enough per hour
                lo = mid + 1;
            } else {
                // we are eating more than we need to per hour
                hi = mid - 1;
            }
        }

        return lo;

        // for (let k = upperK; k > 0; k--) {
        //     let currTotal = 0;

        //     for (const pile of piles) {
        //         const totalHoursToFinish = Math.ceil(pile / k);
        //         currTotal += totalHoursToFinish;
        //     }

        //     console.log('k', k, 'total hours to finish', currTotal);

        //     if (currTotal > h) {
        //         return k + 1;
        //     }
        // }
    }
}
