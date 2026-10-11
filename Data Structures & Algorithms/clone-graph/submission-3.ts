/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (node === null) return null;

        // const root: Node = new Node();
        const visited: Record<number, Node> = {};

        const copyNode = (parent: Node, curr: Node | null) => {
            // create a copy of the current node
            const copy = new Node(curr.val, []);
            visited[curr.val] = copy;

            for (const neighbor of curr.neighbors) {
                // if the current node's neighbors includes where we came from,
                // add the parent to the current node's copy's neighbors
                if (visited[neighbor.val] !== undefined) {
                    copy.neighbors.push(visited[neighbor.val]);
                } else {
                    // else traverse to the neighbor
                    copy.neighbors.push(copyNode(copy, neighbor));
                }
            }

            return copy;
        };

        return copyNode(null, node);
    }
}
