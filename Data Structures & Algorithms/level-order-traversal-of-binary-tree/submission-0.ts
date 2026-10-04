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

const levelTraversal = (root: TreeNode | null, list: number[][], level: number) => {
    if (!root) return;

    if (list.length < level + 1) {
        list.push([root.val]);
    } else {
        list[level].push(root.val);
    }

    // console.log('current node', root.val, 'list', list);

    levelTraversal(root.left, list, level + 1);
    levelTraversal(root.right, list, level + 1);
};

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const list: number[][] = [];

        if (!root) {
            return [];
        }

        levelTraversal(root, list, 0);

        return list;
    }
}
