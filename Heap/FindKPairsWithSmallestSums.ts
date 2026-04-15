// 373. Find K Pairs with Smallest Sums
// https://leetcode.com/problems/find-k-pairs-with-smallest-sums

import { Heap, MaxHeap, MinHeap } from "@datastructures-js/heap"

/**
 * Given two sorted lists of integers, return k of the smallest pairs
 * where a pair contains one integer from each list.
 *
 * Two lists may not be the same length
 *
 * Numbers can be reused, but pairs must be unique, e.g.
 * nums1 = [a0, a1, a2], nums2 = [b0, b1, b2]
 * pairs = [ [a0, b0], [a0, b1], [a0, b2], ... ]
 *
 * @param nums1 array of 1 - 1,000,000 integers (-10,000,000,000 - 10,000,000,000)
 *      sorted in non-decreasing order
 * @param nums2  array of 1 - 1,000,000 integers (-10,000,000,000 - 10,000,000,000)
 *      sorted in non-decreasing order
 * @param k an integer between 1 and 100,000
 * @returns a list of k pairs, each pair containing one integer from nums1 and one from nums2,
 *      with the smallest sums
 */
export function kSmallestPairsAttemptOne(nums1: number[], nums2: number[], k: number): number[][] {
    // The lists are sorted already. Will I need to access every integer in the lists?
    // Or do I only need to look at the first k elements in each list?
    // Get the first k^2 pairs, all combinations of the first k elements in each list.

    type PairSum = { sum: number; pair: number[] }
    const possiblePairs: PairSum[] = []
    for (let i = 0; i < Math.min(k, nums1.length); i++) {
        for (let j = 0; j < Math.min(k, nums2.length); j++) {
            // nested loop = bad!

            const pairSum: PairSum = {
                sum: nums1[i]! + nums2[j]!,
                pair: [nums1[i]!, nums2[j]!]
            }
            possiblePairs.push(pairSum)
        }
    }

    const comparePairSum = (a: PairSum, b: PairSum) => {
        return a.sum - b.sum
    }
    possiblePairs.sort(comparePairSum)

    // return the minimum k pairs
    const minPairs: number[][] = []
    for (let i = 0; i < k; i++) {
        minPairs.push(possiblePairs[i]!.pair)
    }
    return minPairs
}

/**
 * Given two sorted lists of integers, return k of the smallest pairs
 * where a pair contains one integer from each list.
 *
 * Two lists may not be the same length
 *
 * Numbers can be reused, but pairs must be unique, e.g.
 * nums1 = [a0, a1, a2], nums2 = [b0, b1, b2]
 * pairs = [ [a0, b0], [a0, b1], [a0, b2], ... ]
 *
 * @param nums1 array of 1 - 1,000,000 integers (-10,000,000,000 - 10,000,000,000)
 *      sorted in non-decreasing order
 * @param nums2  array of 1 - 1,000,000 integers (-10,000,000,000 - 10,000,000,000)
 *      sorted in non-decreasing order
 * @param k an integer between 1 and 100,000
 * @returns a list of k pairs, each pair containing one integer from nums1 and one from nums2,
 *      with the smallest sums
 */
export function kSmallestPairsAttemptTwo(nums1: number[], nums2: number[], k: number): number[][] {
    // I remember in a past challenge I used a heap to find the k smallest elements
    // I can use a MAX heap of size k to find the k SMALLEST elements.
    // Looking at the k^2 pairs from the first k integers from both lists.
    // If the next pair is SMALLER than the LARGEST pair in the max heap,
    // remove the largest pair (root) from the heap and add the next pair.
    // The only problem is that heaps don't give sorted results
    // and the return is expected to be sorted.

    type PairSum = { pair: number[]; sum: number }
    const maxHeap = new MaxHeap((pairSum: PairSum) => pairSum.sum)
    for (let idx1 = 0; idx1 < Math.min(k, nums1.length); idx1++) {
        for (let idx2 = 0; idx2 < Math.min(k, nums2.length); idx2++) {
            const pairSum = {
                pair: [nums1[idx1]!, nums2[idx2]!],
                sum: nums1[idx1]! + nums2[idx2]!
            }
            if (maxHeap.size() >= k) {
                // add this pair to the heap only if it's smaller than the max
                if (pairSum.sum < maxHeap.root()!.sum) {
                    maxHeap.extractRoot()
                    maxHeap.insert(pairSum)
                }
            } else {
                maxHeap.insert(pairSum)
            }
        }
    }
    // Heaps aren't sorted
    return maxHeap
        .toArray()
        .sort((a: PairSum, b: PairSum) => a.sum - b.sum)
        .map((pairSum: PairSum) => pairSum.pair)
}

/**
 * Given two sorted lists of integers, return k of the smallest pairs
 * where a pair contains one integer from each list.
 *
 * Two lists may not be the same length
 *
 * Numbers can be reused, but pairs must be unique, e.g.
 * nums1 = [a0, a1, a2], nums2 = [b0, b1, b2]
 * pairs = [ [a0, b0], [a0, b1], [a0, b2], ... ]
 *
 * @param nums1 array of 1 - 1,000,000 integers (-10,000,000,000 - 10,000,000,000)
 *      sorted in non-decreasing order
 * @param nums2  array of 1 - 1,000,000 integers (-10,000,000,000 - 10,000,000,000)
 *      sorted in non-decreasing order
 * @param k an integer between 1 and 100,000
 * @returns a list of k pairs, each pair containing one integer from nums1 and one from nums2,
 *      with the smallest sums
 */
export function kSmallestPairsAttemptThree(
    nums1: number[],
    nums2: number[],
    k: number
): number[][] {
    type Pair = { pair: number[]; sum: number; indices: number[] }
    const minPairs: number[][] = []
    // Use a min heap - the root will always be the smallest pair
    const minHeap = new MinHeap((pairSum: Pair) => pairSum.sum)
    for (let i = 0; i < nums1.length; i++) {
        const j = 0
        minHeap.insert({
            pair: [nums1[i]!, nums2[j]!],
            sum: nums1[i]! + nums2[j]!,
            indices: [i, j]
        })
    }

    while (minPairs.length < k && !minHeap.isEmpty()) {
        const minPair = minHeap.extractRoot()
        const i = minPair?.indices[0]!
        const j = minPair?.indices[1]!
        minPairs.push(minPair!.pair)

        // The next smallest pair contains the next integer in the list
        if (j + 1 < nums2.length) {
            minHeap.insert({
                pair: [nums1[i]!, nums2[j + 1]!],
                sum: nums1[i]! + nums2[j + 1]!,
                indices: [i, j + 1]
            })
        }
    }
    return minPairs
}
