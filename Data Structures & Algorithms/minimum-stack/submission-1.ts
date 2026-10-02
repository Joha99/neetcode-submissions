interface StackItem {
    value: number;
    currentMin: number;
}

class MinStack {
    #stack: StackItem[];

    constructor() {
        this.#stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.#stack.length === 0) {
            this.#stack.push({ value: val, currentMin: val });
        } else {
            const prevItem = this.#stack[this.#stack.length - 1];
            if (val < prevItem.currentMin) {
                this.#stack.push({ value: val, currentMin: val });
            } else {
                this.#stack.push({ value: val, currentMin: prevItem.currentMin });
            }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.#stack.pop(); 
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.#stack[this.#stack.length - 1].value;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.#stack[this.#stack.length - 1].currentMin;
    }
}
