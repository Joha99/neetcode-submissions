/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

const findMiddle = (head: ListNode | null, tail: ListNode | null) => {
    if (tail === null) {
        return head;
    }

    const newHead = findMiddle(head, tail.next);

    if (newHead === null) {
        // returning back up to the first call
        return null;
    } else if (newHead.next === tail || newHead === tail) {
        // in the middle
        tail.next = null;
        return null;
    } else {
        // modify the list in place when the tail is not in the middle 
        const nextHead = newHead.next;
        tail.next = nextHead;
        newHead.next = tail;
        return nextHead;
    }
};

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        findMiddle(head, head);
    }
}
