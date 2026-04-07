import { isPalindrome } from "./PalindromeNumber.js"

describe("9. Palindrome number", () => {
    it("case 1", () => {
        expect(isPalindrome(121)).toBe(true)
    })

    it("case 2", () => {
        expect(isPalindrome(321123)).toBe(true)
    })

    it("case 3", () => {
        expect(isPalindrome(1)).toBe(true)
    })

    it("case 4", () => {
        expect(isPalindrome(-1)).toBe(false)
    })

    it("case 5", () => {
        expect(isPalindrome(82743652903)).toBe(false)
    })
})
