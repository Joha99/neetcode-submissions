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

const getTreeHeight = (root: TreeNode | null, store: { balanced: boolean }) => {
    if (!root) return 0;

    const leftHeight = getTreeHeight(root.left, store);
    const rightHeight = getTreeHeight(root.right, store);

    if (Math.abs(leftHeight - rightHeight) > 1) {
        store.balanced = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
};

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (!root) return true;

        const store = { balanced: true };

        const treeHeight = getTreeHeight(root, store);

        return store.balanced;
    }
}
