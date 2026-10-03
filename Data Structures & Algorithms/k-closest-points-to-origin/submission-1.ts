type HeapItem = {
    distance: number;
    point: number[];
};

const getDistanceToOrigin = (x: number, y: number) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

const addToMaxHeap = (maxHeap: HeapItem[], item: HeapItem) => {
    maxHeap.push(item);

    let currIndex = maxHeap.length - 1;

    while (currIndex > 0) {
        const parentIndex = Math.floor((currIndex - 1) / 2);
        const parentDistance = maxHeap[parentIndex].distance;

        if (item.distance > parentDistance) {
            [maxHeap[parentIndex], maxHeap[currIndex]] = [maxHeap[currIndex], maxHeap[parentIndex]];
            currIndex = parentIndex;
        } else {
            break;
        }
    }
};

const replaceMaxInHeap = (maxHeap: HeapItem[], item: HeapItem) => {
    maxHeap[0] = item;

    let currIndex = 0;

    while (
        currIndex < maxHeap.length &&
        (currIndex * 2 + 1 < maxHeap.length || currIndex * 2 + 2 < maxHeap.length)
    ) {
        const currDistance = maxHeap[currIndex].distance;

        const left = currIndex * 2 + 1;
        const right = currIndex * 2 + 2;

        let swapIndex; 

        if (left < maxHeap.length && right < maxHeap.length) {
            swapIndex = maxHeap[left].distance > maxHeap[right].distance ? left : right;
        } else {
            swapIndex = left < maxHeap.length ? left : right; 
        }

        if (maxHeap[swapIndex].distance > currDistance) {
            [maxHeap[currIndex], maxHeap[swapIndex]] = [maxHeap[swapIndex], maxHeap[currIndex]];
            currIndex = swapIndex;
        } else {
            break;
        }
    }
};

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // keep a max heap of size k
        // if current point has distance that's less than the max, remove the max and add current point

        const maxHeap: HeapItem[] = [];

        for (let p = 0; p < points.length; p++) {
            const distance = getDistanceToOrigin(points[p][0], points[p][1]);
            const heapItem: HeapItem = {
                distance,
                point: points[p],
            };

            if (maxHeap.length < k) {
                addToMaxHeap(maxHeap, heapItem);
            } else if (distance < maxHeap[0].distance) {
                replaceMaxInHeap(maxHeap, heapItem);
            }
        }

        return maxHeap.map((item) => item.point);
    }
}
