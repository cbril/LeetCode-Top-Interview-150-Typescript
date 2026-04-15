import {
    kSmallestPairsAttemptOne,
    kSmallestPairsAttemptTwo,
    kSmallestPairsAttemptThree
} from "./FindKPairsWithSmallestSums.js"

describe("373. Find K Pairs with Smallest Sums", () => {
    it("impl 1 case 1", () => {
        const nums1 = [1, 1, 2]
        const nums2 = [1, 2, 3]
        const k = 2
        expect(kSmallestPairsAttemptOne(nums1, nums2, k)).toEqual([
            [1, 1],
            [1, 1]
        ])
    })

    it("impl 1 case 2", () => {
        const nums1 = [1, 7, 11]
        const nums2 = [2, 4, 6]
        const k = 3
        expect(kSmallestPairsAttemptOne(nums1, nums2, k)).toEqual([
            [1, 2],
            [1, 4],
            [1, 6]
        ])
    })

    it("impl 1 case 3", () => {
        const nums1 = [2, 7, 11]
        const nums2 = [2, 4, 6, 9, 10]
        const k = 4
        expect(kSmallestPairsAttemptOne(nums1, nums2, k)).toEqual([
            [2, 2],
            [2, 4],
            [2, 6],
            [7, 2]
        ])
    })

    it("impl 2 case 1", () => {
        const nums1 = [1, 1, 2]
        const nums2 = [1, 2, 3]
        const k = 2
        expect(kSmallestPairsAttemptTwo(nums1, nums2, k)).toEqual([
            [1, 1],
            [1, 1]
        ])
    })

    it("impl 2 case 2", () => {
        const nums1 = [1, 7, 11]
        const nums2 = [2, 4, 6]
        const k = 3
        expect(kSmallestPairsAttemptTwo(nums1, nums2, k)).toEqual([
            [1, 2],
            [1, 4],
            [1, 6]
        ])
    })

    it("impl 2 case 3", () => {
        const nums1 = [2, 7, 11]
        const nums2 = [2, 4, 6, 9, 10]
        const k = 4
        expect(kSmallestPairsAttemptTwo(nums1, nums2, k)).toEqual([
            [2, 2],
            [2, 4],
            [2, 6],
            [7, 2]
        ])
    })

    it("impl 3 case 1", () => {
        const nums1 = [1, 1, 2]
        const nums2 = [1, 2, 3]
        const k = 2
        expect(kSmallestPairsAttemptThree(nums1, nums2, k)).toEqual([
            [1, 1],
            [1, 1]
        ])
    })

    it("impl 3 case 2", () => {
        const nums1 = [1, 7, 11]
        const nums2 = [2, 4, 6]
        const k = 3
        expect(kSmallestPairsAttemptThree(nums1, nums2, k)).toEqual([
            [1, 2],
            [1, 4],
            [1, 6]
        ])
    })

    it("impl 3 case 3", () => {
        const nums1 = [2, 7, 11]
        const nums2 = [2, 4, 6, 9, 10]
        const k = 4
        expect(kSmallestPairsAttemptThree(nums1, nums2, k)).toEqual([
            [2, 2],
            [2, 4],
            [2, 6],
            [7, 2]
        ])
    })
})
