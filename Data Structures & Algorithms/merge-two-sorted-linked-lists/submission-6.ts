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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1 && !list2) return null;
        if (!list1) return list2;
        if (!list2) return list1;

        let p = new ListNode(); 
        const head = p;

        // if (list1.val <= list2.val) {
        //     p = list1;
        //     list1 = list1.next;
        // } else {
        //     p = list2;
        //     list2 = list2.next;
        // }
        
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                p.next = list1;
                list1 = list1.next;
            } else {
                p.next = list2;
                list2 = list2.next;
            }
            p = p.next;
        }

        p.next = list1 ?? list2; 

        return head.next;
    }
}
