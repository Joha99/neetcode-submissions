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
    if ((root !== null && subRoot === null) || (root === null && subRoot !== null)) return false;

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
        if ((root !== null && subRoot === null) || (root === null && subRoot !== null))
            return false;

        // is a subtree if root or left or right is === subRoot
        if (root.val === subRoot.val) {
            console.log("same val", root.val, subRoot.val);
            const isSame = isSameTree(root, subRoot);
            if (isSame) return true;
        }

        console.log("not same val", root.val, subRoot.val);
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
