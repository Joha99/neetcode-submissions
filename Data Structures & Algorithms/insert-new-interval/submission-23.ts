class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const newStart = newInterval[0];
        const newEnd = newInterval[1];

        const newResult: number[][] = [];
        let index = 0;

        // while intervals come before the new interval
        while (index < intervals.length && intervals[index][1] < newStart) {
            newResult.push(intervals[index]);
            index++;
        }

        let mergedStart = newStart; 
        let mergedEnd = newEnd;

        // handle overlapping intervals
        while (index < intervals.length && intervals[index][0] <= newEnd) {
            mergedStart = Math.min(intervals[index][0], mergedStart);
            mergedEnd = Math.max(intervals[index][1], mergedEnd);
            index++;
        }
        newResult.push([mergedStart, mergedEnd]);

        // find intervals that come after the new interval
        while (index < intervals.length && newEnd < intervals[index][0]) {
            newResult.push(intervals[index]);
            index++;
        }

        return newResult;
    }
}
