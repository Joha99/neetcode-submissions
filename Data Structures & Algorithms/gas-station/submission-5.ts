class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
        const totalCost = cost.reduce((acc, curr) => acc + curr, 0); 

        // there is not enough has to get to all stations
        if (totalCost > totalGas) return -1; 

        // there is guaranteed to be a solution 
        let start = 0; 
        while (start < gas.length) {
            let gasInTank = gas[start] - cost[start]; 
            let nextStation = start + 1; 

            

            while (gasInTank >= 0 && nextStation < gas.length) {
                gasInTank += (gas[nextStation] - cost[nextStation]); 
                nextStation += 1; 
            }

            if (start === nextStation && gasInTank >= 0 || nextStation === gas.length) {
                return start;
            }

           start = nextStation;  
        }
    }
}
