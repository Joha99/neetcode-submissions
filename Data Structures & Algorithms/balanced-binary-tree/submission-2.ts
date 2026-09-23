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

const getTreeHeight = (root: TreeNode | null) => {
    if (!root) return 0;

    const leftHeight = getTreeHeight(root.left);
    const rightHeight = getTreeHeight(root.right);

    if (leftHeight === -1 || rightHeight === -1) {
        return -1; 
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1; 
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

        const balanced = getTreeHeight(root);

        return balanced !== -1;
    }
}
