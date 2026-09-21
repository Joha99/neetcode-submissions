class KthLargest {
    #array: number[];
    #k: number;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.#array = [...nums].sort((a, b) => b - a).splice(0, k);
        this.#k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        if (this.#array[this.#k - 1] > val) {
            return this.#array[this.#k - 1]; 
        }

        let insert = 0; 

        for (let i = 0; i < this.#k; i++) {
            if (val >= this.#array[i]) {
                insert = i; 
                break; 
            }
        }

        this.#array.splice(insert, 0 , val).splice(0, -1); 
        return this.#array[this.#k - 1];
    }
}
