class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // since 2d array is sorted, this becomes a binary search
        const rows = matrix.length;
        const cols = matrix[0].length;

        let lo = 0;
        let hi = rows * cols - 1;

        console.log("hi", hi);

        while (lo <= hi) {
            const mid = lo + Math.floor((hi - lo) / 2);
            const currRow = Math.floor(mid / cols);
            const currCol = mid % cols;

            console.log("mid", mid, "currR", currRow, "corrCol", currCol);

            if (matrix[currRow][currCol] === target) {
                return true;
            }
            if (matrix[currRow][currCol] > target) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return false;
    }
}
