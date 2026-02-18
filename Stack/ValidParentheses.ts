/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses
 */

/**
 * This solution is wrong because this is a valid string as well but is not symmetrical: "()[]{}" 
 * @param s a string containing only the characters ()[]{}
 * @returns true if each bracket in the string is properly opened and closed, false otherwise
 * @example
 * "({})" -> true
 * "(({))" -> false
 */
function isValidParenthesesFirstAttempt(s: string): boolean {
    // What I know about a valid string is that is must have an even number of characters
    // and the first half, when reversed, will look like the second half but with the 
    // closing parentheses
    if (s.length % 2 !== 0) {
        return false
    }
    const mid = s.length / 2
    const firstHalf = s.slice(0, mid)
    const secondHalf = s.slice(mid, s.length)

    const closers: Record<string, string> = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    const reversed = firstHalf.split("").reverse()
    for (let i = 0; i < reversed.length; i++) {
        if (closers[reversed[i]!] !== secondHalf[i]) {
            return false
        }
    }

    return true
}

/**
 * @param s a string containing only the characters ()[]{}
 * @returns true if each bracket in the string is properly opened and closed, false otherwise
 * @example
 * "(){}" -> true
 * "({})" -> true
 * "(({))" -> false
 */
function isValidParenthesesSecondAttempt(s: string): boolean {
    // Need to know if a symbol is an "opener" or a "closer". 
    // If it's an opener, push it to a LIFO stack.
    // If it's a closer, pop an opener from the queue and verify that it's the right opener for the closer.
    // Need to know what an opener's corresponding closer is.

    const isOpener = (symbol: string): boolean => {
        return ["{", "[", "("].includes(symbol);
    }
    const isCloser = (symbol: string): boolean => {
        return ["}", "]", ")"].includes(symbol);
    }
    const openerFor: Record<string, string> = {
        "}": "{",
        ")": "(",
        "]": "["
    }

    const openers = []
    for (const symbol of s) {
        if (isOpener(symbol)) {
            openers.push(symbol)
        } else if (isCloser(symbol)) {
            if (openerFor[symbol] !== openers.pop()) {
                return false
            }
        }
    }
    // stack should be empty at the end
    if (openers.length > 0) {
        return false
    }

    return true
}

function main(): void {
    let s = "([])({})(([]))"
    console.log(`String "${s}" is valid parentheses: [${isValidParenthesesSecondAttempt(s)}] (should be true)\n`)
    s = "((((([[[[{{{}}}]]]])))))[]{}"
    console.log(`String "${s}" is valid parentheses: [${isValidParenthesesSecondAttempt(s)}] (should be true)\n`)
    s = "[[[{()]]]"
    console.log(`String "${s}" is valid parentheses: [${isValidParenthesesSecondAttempt(s)}] (should be false)\n`)
    s = "(){}["
    console.log(`String "${s}" is valid parentheses: [${isValidParenthesesSecondAttempt(s)}] (should be false)\n`)
}

main()
