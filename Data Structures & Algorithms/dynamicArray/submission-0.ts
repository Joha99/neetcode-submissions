class DynamicArray {
    #array: (number | undefined)[] = [];
    #capacity = null;
    #size = 0;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.#array = new Array(capacity);
        this.#capacity = capacity;
        this.#size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.#array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.#array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.#size === this.#capacity) {
            this.resize();
        }
        this.#array[this.#size] = n;
        this.#size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const item = this.#array[this.#size - 1];
        this.#array[this.#size - 1] = undefined;
        this.#size--;
        return item;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.#array = [...this.#array, ...new Array(this.#capacity)];
        this.#capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.#size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.#capacity;
    }
}
