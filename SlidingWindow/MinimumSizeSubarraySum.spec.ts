import { getMinSubArrayLenSecondAttempt } from "./MinimumSizeSubarraySum.js"

describe("209. Minimum Size Subarray Sum", () => {
    it("case 1", () => {
        expect(getMinSubArrayLenSecondAttempt(4, [1, 1, 1, 2, 2, 4])).toBe(1)
    })

    it("case 2", () => {
        expect(getMinSubArrayLenSecondAttempt(10, [10, 2, 5, 5])).toBe(1)
    })

    it("case 3", () => {
        expect(getMinSubArrayLenSecondAttempt(4, [2, 1, 3])).toBe(2)
    })

    it("case 4", () => {
        expect(getMinSubArrayLenSecondAttempt(20, [3, 5, 2, 1, 2, 2])).toBe(0)
    })

    it("case 5", () => {
        expect(getMinSubArrayLenSecondAttempt(1, [])).toBe(0)
    })
})
