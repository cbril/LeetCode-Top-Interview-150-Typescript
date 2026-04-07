import { isValidParenthesesSecondAttempt } from "./ValidParentheses.js"

describe("20. Valid Parentheses", () => {
    it("case 1", () => {
        expect(isValidParenthesesSecondAttempt("([])({})(([]))")).toBe(true)
    })

    it("case 2", () => {
        expect(isValidParenthesesSecondAttempt("((((([[[[{{{}}}]]]])))))[]{}")).toBe(true)
    })

    it("case 3", () => {
        expect(isValidParenthesesSecondAttempt("[[[{()]]]")).toBe(false)
    })

    it("case 4", () => {
        expect(isValidParenthesesSecondAttempt("(){}[")).toBe(false)
    })
})
