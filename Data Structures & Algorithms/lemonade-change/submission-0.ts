type Bill = 5 | 10 | 20;

class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills: number[]): boolean {
        // each lemonade = $5
        // possible bills for paying: $5, $10, $20
        // need to give correct change to customers

        const collection: Record<Bill, number> = {
            5: 0, // 2
            10: 0, // 1
            20: 0, //
        };

        const canMakeFifteen = () => {
            return (
                (collection[10] === 0 && collection[5] >= 3) ||
                (collection[10] >= 1 && collection[5] >= 1)
            );
        };

        for (let b = 0; b < bills.length; b++) {
            const currBill = bills[b] as Bill;
            const change = currBill - 5;
            
            // receive current bill
            collection[currBill] += 1;

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
        }
        return true;
    }
}
