type Interval = [number, number];

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: Interval[]): Interval[] {
        // sort in ascending order by the start time
        intervals.sort((a, b) => a[0] - b[0]);

        const merged: Interval[] = [intervals[0]];
        let pointer = 1;

        while (pointer < intervals.length) {
            const curr = intervals[pointer];
            const lastMerged = merged[merged.length - 1];

            // if there's overlap, merge overlapping intervals
            if (curr[0] <= lastMerged[1]) {
                merged[merged.length - 1][1] = Math.max(curr[1], lastMerged[1])
            }

            // if there's none, just add it to the solution
            else {
                merged.push([curr[0], curr[1]]);
            }

            pointer++;
        }

        return merged;
    }
}
