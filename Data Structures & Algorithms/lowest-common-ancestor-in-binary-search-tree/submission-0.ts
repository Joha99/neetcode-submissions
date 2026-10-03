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

const containsNode = (root: TreeNode | null, node: TreeNode | null) => {
    if (root === null) {
        return false;
    }
    if (root.val === node.val) {
        return true;
    }

    if (node.val < root.val) {
        return containsNode(root.left, node);
    }
    return containsNode(root.right, node);
};

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        // if p and q are both found on the same side of the tree, then root is not the LCA
        // if p is found in one subtree and q the other, then root is LCA

        console.log("root", root?.val);

        if ((p.val <= root.val && q.val >= root.val) || (p.val >= root.val && q.val <= root.val)) {
            console.log("LCA", root?.val);
            return root;
        } else if (p.val < root.val && q.val < root.val) {
            console.log("Going left");
            return this.lowestCommonAncestor(root.left, p, q);
        } else if (p.val > root.val && q.val > root.val) {
            console.log("Going right");
            return this.lowestCommonAncestor(root.right, p, q);
        }
    }
}
