import { lengthOfLongestSubstringAttemptTwo } from "./LongestSubstringWithoutRepeatingCharacters.js"

describe("3. Longest Substring Without Repeating Characters", () => {
    it("case 1", () => {
        expect(lengthOfLongestSubstringAttemptTwo("abcdab")).toBe(4)
    })

    it("case 2", () => {
        expect(lengthOfLongestSubstringAttemptTwo("")).toBe(0)
    })

    it("case 3", () => {
        expect(lengthOfLongestSubstringAttemptTwo("dvdf")).toBe(3)
    })

    it("case 4", () => {
        expect(lengthOfLongestSubstringAttemptTwo("aaaa! aaaa!aaa aaaaagrcaobd!")).toBe(8)
    })
})
