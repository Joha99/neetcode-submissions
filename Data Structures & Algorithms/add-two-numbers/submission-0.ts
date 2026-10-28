/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        // if (!l1 && !l2) return null;
        // if (!l1) return l2;
        // if (!l2) return l1;

        const head = new ListNode();
        let newListPtr = head;

        const traverseLists = (l1: ListNode | null, l2: ListNode | null, carryOver: number) => {
            if (!l1 && !l2) {
                if (carryOver !== 0) {
                    newListPtr.next = new ListNode(carryOver);
                }
            } else if (!l1) {
                const newValue = carryOver + l2.val; 
                const newCarryOver = Math.trunc(newValue / 10); 
                const remainder = newValue % 10; 

                newListPtr.next = new ListNode(remainder);
                newListPtr = newListPtr.next;
                traverseLists(l1, l2.next, newCarryOver);
            }else if (!l2) {
                const newValue = carryOver + l1.val; 
                const newCarryOver = Math.trunc(newValue / 10); 
                const remainder = newValue % 10; 

                newListPtr.next = new ListNode(remainder);
                newListPtr = newListPtr.next;
                traverseLists(l1.next, l2, newCarryOver);
            } else {
                const newValue = carryOver + l1.val + l2.val; 
                const newCarryOver = Math.trunc(newValue / 10); 
                const remainder = newValue % 10; 

                newListPtr.next = new ListNode(remainder);
                newListPtr = newListPtr.next;
                traverseLists(l1.next, l2.next, newCarryOver);
            }
        };

        traverseLists(l1, l2, 0); 

        return head.next;
    }
}
