class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const offsets = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let max = 0;
        const width = grid.length;
        const height = grid[0].length;

        const getArea = (x: number, y: number) => {
            let sum = 0;
            for (const offset of offsets) {
                const newX = x + offset[0];
                const newY = y + offset[1];

                if (
                    newX >= 0 &&
                    newX < width &&
                    newY >= 0 &&
                    newY < height &&
                    grid[newX][newY] === 1
                ) {
                    grid[newX][newY] = 0;
                    sum = sum + 1 + getArea(newX, newY);
                }
            }
            return sum;
        };

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const cell = grid[x][y];
                const key = `${x},${y}`;
                if (cell === 1) {
                    grid[x][y] = 0;
                    const totalArea = 1 + getArea(x, y);
                    max = Math.max(max, totalArea); 
                }
            }
        }

        return max;
    }
}
