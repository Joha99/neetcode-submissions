/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

const recurseReverse = (root: ListNode | null, prev: ListNode | null) => {
    if (!root.next) {
        root.next = prev;
        return root;
    } else {
        const newHead = recurseReverse(root.next, root);
        root.next = prev;
        return newHead;
    }
};

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (head === null) return null;
        return recurseReverse(head, null);
    }
}
