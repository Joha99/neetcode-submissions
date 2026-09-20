class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const records: number[] = [];
        let sum: number = 0;

        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];
            const lastRecord = records[records.length - 1];

            if (op === "+") {
                const newScore = lastRecord + records[records.length - 2];
                records.push(newScore);
                sum += newScore;
            } else if (op === "C") {
                const invalidated = records.pop();
                sum -= invalidated;
            } else if (op === "D") {
                const double = lastRecord * 2;
                records.push(double);
                sum += double;
            } else {
                const newScore = parseInt(op);
                records.push(newScore);
                sum += newScore;
            }
        }

        return sum;
    }
}
