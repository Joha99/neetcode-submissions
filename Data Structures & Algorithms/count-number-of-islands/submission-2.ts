class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rowCount = grid.length;
        const colCount = grid[0].length;
        let islandCount = 0;

        // keep track of island cells we've already seen
        const seen = Array.from({ length: rowCount }, () =>
            Array.from({ length: colCount }, () => false),
        );

        const visitNeighbors = (x: number, y: number) => {
            const offsets = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (const offset of offsets) {
                const [newX, newY] = [x + offset[0], y + offset[1]];
                if (
                    newX >= 0 &&
                    newX < rowCount &&
                    newY >= 0 &&
                    newY < colCount &&
                    grid[newX][newY] === "1" &&
                    !seen[newX][newY]
                ) {
                    seen[newX][newY] = true;
                    visitNeighbors(newX, newY);
                }
            }
        };

        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < colCount; c++) {
                if (grid[r][c] === "1" && !seen[r][c]) {
                    islandCount++;
                    seen[r][c] = true;
                    visitNeighbors(r, c);
                }
            }
        }

        return islandCount;
    }
}
