const maxHeapify = (array: number[]) => {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        let curr = i;

        while (curr < array.length) {
            let left = curr * 2 + 1;
            let right = curr * 2 + 2;
            let largest = curr;

            if (left <= array.length - 1 && array[left] > array[largest]) {
                largest = left;
            }
            if (right <= array.length - 1 && array[right] > array[largest]) {
                largest = right;
            }

            if (largest !== curr) {
                [array[largest], array[curr]] = [array[curr], array[largest]];
                curr = largest;
            } else {
                break;
            }
        }
    }
};

const removeRoot = (array: number[]) => {
    if (array.length === 1) {
        return array.pop();
    }

    let curr = 0;
    const root = array[0];
    const leaf = array.pop();
    array[0] = leaf;


    while (curr < array.length) {
        let left = curr * 2 + 1;
        let right = curr * 2 + 2;
        let largest = curr;

        if (left <= array.length - 1 && array[left] > array[largest]) {
            largest = left;
        }
        if (right <= array.length - 1 && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== curr) {
            [array[largest], array[curr]] = [array[curr], array[largest]];
            // shift down
            curr = largest;
        } else {
            break;
        }
    }

    return root;
};

const addNode = (array: number[], node: number) => {
    array.push(node);

    let curr = Math.floor(array.length / 2) - 1;

    while (curr >= 0) {
        let left = curr * 2 + 1;
        let right = curr * 2 + 2;
        let largest = curr;

        if (left <= array.length - 1 && array[left] > array[largest]) {
            largest = left;
        }
        if (right <= array.length - 1 && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== curr) {
            [array[largest], array[curr]] = [array[curr], array[largest]];
            // shift up
            curr = Math.floor((curr - 1) / 2);
        } else {
            break;
        }
    }
};

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        maxHeapify(stones);

        while (stones.length > 1) {
            const x = removeRoot(stones);
            const y = removeRoot(stones);

            if (x !== y) {
                const remainder = Math.max(x - y, y - x);
                addNode(stones, remainder);
            }
        }

        return stones.length === 0 ? 0 : stones[0];
    }
}
