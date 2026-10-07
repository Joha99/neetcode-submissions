class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        // mxn grid
        // can move down or right
        // unique paths from 0,0 to m-1, n-1
        // two moves: down(0,1) or right(1,0)
        // this means at any cell x,y you can only have landed there from x-1 or y-1

        const paths = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
        paths[0][0] = 1;

        for (let r = 0; r < m; r++) { // row
            for (let c = 0; c < n; c++) { // col
                if (r === 0 && c === 0) continue;

                let sum = 0;
                const fromTop = r - 1;
                if (fromTop >= 0) {
                    sum += paths[fromTop][c];
                }
                const fromLeft = c - 1;
                if (fromLeft >= 0) {
                    sum += paths[r][fromLeft];
                }
                paths[r][c] = sum;
            }
        }

        return paths[m - 1][n - 1]; 
    }
}
