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

const isSameTree = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null && subRoot === null) return true;
    if (root === null || subRoot === null) return false;

    return (
        root.val === subRoot.val &&
        isSameTree(root.left, subRoot.left) &&
        isSameTree(root.right, subRoot.right)
    );
};

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root === null && subRoot === null) return true;
        if (root === null || subRoot === null) return false;

        return (
            isSameTree(root, subRoot) ||
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
}
