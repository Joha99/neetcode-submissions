class KthLargest {
    #array: number[];
    #k: number;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.#array = [...nums].sort((a, b) => b - a);
        this.#k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        let lo = 0;
        let hi = this.#array.length - 1;

        while (lo < hi) {
            const mid = Math.floor((hi - lo) / 2) + lo;

            if (this.#array[mid] >= val) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        if (this.#array.length === 1 && val < this.#array[0]) {
            this.#array.push(val);
        } else {
            this.#array.splice(lo, 0, val);
        }

        return this.#array[this.#k - 1];
    }
}
