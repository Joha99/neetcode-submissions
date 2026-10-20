class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        for (let start = 0; start < gas.length; start++) {
            let gasInTank = gas[start] - cost[start];
            let nextStation = (start + 1) % gas.length;

            while (gasInTank > 0 && nextStation !== start) {
                gasInTank += gas[nextStation] - cost[nextStation];
                nextStation = (nextStation + 1) % gas.length;
            }

            if (start === nextStation && gasInTank >= 0) {
                return start;
            }
        }
        return -1;
    }
}
