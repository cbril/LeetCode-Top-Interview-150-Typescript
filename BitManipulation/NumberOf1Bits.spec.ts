import { hammingWeightAttemptTwo } from "./NumberOf1Bits.js"

describe("191. Number of 1 Bits", () => {
    it("finds the set bits for 1", () => {
        const n = 1
        const setBits = hammingWeightAttemptTwo(n)
        expect(setBits).toEqual(1)
    })

    it("finds the set bits for 129", () => {
        const n = 129
        const setBits = hammingWeightAttemptTwo(n)
        expect(setBits).toEqual(2)
    })

    it("finds the set bits for (2^31)-1", () => {
        const n = 2 ** 31 - 1
        const setBits = hammingWeightAttemptTwo(n)
        expect(setBits).toEqual(31)
    })
})
