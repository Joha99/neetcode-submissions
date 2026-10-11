class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        // is a min heap of length k
        const heap = [];

        const heapifyDown = (index: number) => {
            let curr = index;
            while (curr * 2 + 1 < heap.length) {
                const left = curr * 2 + 1;
                const right = curr * 2 + 2;
                let smallest = left;

                if (right < heap.length && heap[right] < heap[left]) {
                    smallest = right;
                }

                if (heap[curr] > heap[smallest]) {
                    [heap[curr], heap[smallest]] = [heap[smallest], heap[curr]];
                    curr = smallest;
                } else {
                    break;
                }
            }
        };

        const heapifyUp = (index: number) => {
            let curr = index;
            while (Math.floor((curr - 1) / 2) >= 0) {
                const parent = Math.floor((curr - 1) / 2);

                if (heap[curr] < heap[parent]) {
                    [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
                    curr = parent;
                } else {
                    break;
                }
            }
        };

        // O(n)
        for (let n = 0; n < nums.length; n++) {
            const curr = nums[n];

            // O(log k)
            if (heap.length < k) {
                heap.push(curr);
                heapifyUp(heap.length - 1);
            } else {
                if (curr > heap[0]) {
                    heap[0] = curr;
                    heapifyDown(0);
                }
            }
        }

        // with a min heap of k elements, the root is guaranteed to be a minimum of the top k values in nums
        return heap[0];
    }
}
