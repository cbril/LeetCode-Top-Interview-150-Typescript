import { merge } from "./MergeIntervals.js"

describe("56. Merge Intervals", () => {
    it("doesnt merge when there's no overlap", () => {
        expect(merge([[1,2], [3,4], [5,6]])).toEqual([[1,2], [3,4], [5,6]])
    })

    it("handles minimum number of intervals", () => {
        const intervals = [[2,100]]
        expect(merge(intervals)).toEqual(intervals)
    })

    it("merges 2 overlapping intervals", () => {
        expect(merge([[1,4], [3,5], [7,9]])).toEqual([[1,5], [7,9]])
    })

    it("merges 3 overlapping intervals", () => {
        expect(merge([[1,5], [3,8], [6,10]])).toEqual([[1,10]])
    })

    it("merges touching intervals", () => {
        expect(merge([[1,2], [2,3], [3,4]])).toEqual([[1,4]])
    })

    it("merges subset intervals", () => {
        expect(merge([[1,10], [2,5], [2,4]])).toEqual([[1,10]])
    })
})