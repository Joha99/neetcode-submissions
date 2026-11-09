class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const isInBounds = (r: number, c: number) => {
            return r >= 0 && r < rows && c >= 0 && c < cols;
        };

        const siblingVectors: [number, number][] = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const rows = grid.length;
        const cols = grid[0].length;
        const rotten: { r: number; c: number; minute: number }[] = [];
        let totalFresh = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = grid[r][c];
                // is rotten
                if (cell === 2) {
                    rotten.push({ r, c, minute: 0 });
                } else if (cell === 1) {
                    totalFresh++;
                }
            }
        }

        let timeElapsed = 0;
        let newlyRotted = 0;

        // BFS
        while (rotten.length > 0) {
            const current = rotten.shift();

            for (const vector of siblingVectors) {
                const siblingR = current.r + vector[0];
                const siblingC = current.c + vector[1];
                const isInsideGrid = isInBounds(siblingR, siblingC);

                if (isInsideGrid && grid[siblingR][siblingC] === 1) {
                    newlyRotted++;
                    grid[siblingR][siblingC] = 2;
                    rotten.push({ r: siblingR, c: siblingC, minute: current.minute + 1 });
                    timeElapsed = Math.max(timeElapsed, current.minute + 1);
                }
            }
        }

        return newlyRotted === totalFresh ? timeElapsed : -1;
    }
}
