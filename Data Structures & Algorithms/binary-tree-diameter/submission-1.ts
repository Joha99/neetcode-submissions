/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

const getMaxHeight = (root: TreeNode | null, state: { max: number }): number => {
    if (root === null) return 0;

    let leftLength = root.left ? 1 + getMaxHeight(root.left, state) : 0;
    let rightLength = root.right ? 1 + getMaxHeight(root.right, state) : 0;
    const diameter = leftLength + rightLength;

    if (diameter > state.max) {
        state.max = diameter;
    }

    return Math.max(leftLength, rightLength);
};

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        const state = { max: 0 };
        getMaxHeight(root, state);
        return state.max;
    }
}
