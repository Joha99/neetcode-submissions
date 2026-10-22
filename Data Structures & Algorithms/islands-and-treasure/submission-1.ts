class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const rowsCount = grid.length;
        const colsCount = grid[0].length;

        // down, up, right, left
        const offsets = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const traverseGrid = (r: number, c: number) => {
            const queue: { x: number; y: number; dist: number }[] = [{ x: r, y: c, dist: 0 }];
            let queuePtr = 0;

            while (queuePtr < queue.length) {
                const curr = queue[queuePtr];
                queuePtr++;

                for (const offset of offsets) {
                    const newX = offset[0] + curr.x;
                    const newY = offset[1] + curr.y;

                    if (newX >= 0 && newX < rowsCount && newY >= 0 && newY < colsCount) {
                        if (grid[newX][newY] === 2147483647) {
                            queue.push({ x: newX, y: newY, dist: curr.dist + 1 });
                            grid[newX][newY] = curr.dist + 1;
                        } else if (grid[newX][newY] !== 0 && grid[newX][newY] !== -1) {
                            const prevDist = grid[newX][newY];
                            const newDist = curr.dist + 1;
                            if (prevDist > newDist) {
                                queue.push({ x: newX, y: newY, dist: newDist });
                                grid[newX][newY] = newDist;
                            }
                        }
                    }
                }
            }
        };

        for (let r = 0; r < rowsCount; r++) {
            for (let c = 0; c < colsCount; c++) {
                const cell = grid[r][c];
                // if the cell is a treasure chest, traverse outwards from it and update the cells around it if they are not -1
                if (cell === 0) {
                    traverseGrid(r, c);
                }
            }
        }
    }
}
