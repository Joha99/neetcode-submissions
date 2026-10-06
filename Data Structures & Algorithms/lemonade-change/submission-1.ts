type Bill = 5 | 10 | 20

class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills: Bill[]): boolean {
        const collection: Record<Bill, number> = {
            5: 0, 
            10: 0, 
            20: 0, 
        };

        const canMakeFifteen = () => {
            return (
                (collection[10] === 0 && collection[5] >= 3) ||
                (collection[10] >= 1 && collection[5] >= 1)
            );
        };

        for (let b = 0; b < bills.length; b++) {
            const currBill = bills[b];
            const change = currBill - 5;

            if (change > 0) {
                if (change === 5 && collection[5] > 0) {
                    collection[5] -= 1;
                } else if (change === 15 && canMakeFifteen()) {
                    if (collection[10] === 0) {
                        collection[5] -= 3; 
                    } else {
                        collection[10] -= 1; 
                        collection[5] -= 1; 
                    }
                } else {
                    return false;
                }
            }

            collection[currBill] += 1;
        }
        return true;
    }
}
