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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const root = new ListNode(0, head);

        const remove = (node: ListNode | null) => {
            if (node === null) return 0;

            const distFromEnd = 1 + remove(node.next);

            if (distFromEnd === n + 1) {
                node.next = node.next.next;
            }

            return distFromEnd;
        };

        remove(root);

        return root.next;
    }
}
