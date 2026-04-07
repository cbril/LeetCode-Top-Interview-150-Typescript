// 9. Palindrome number

/**
 * Determine if a number is a palindrome.
 * @param x an integer.
 * @returns true if the integer is a palindrome (reads the same forward and backwards).
 */
export function isPalindrome(x: number): boolean {
    const stringNum: string = x.toString()
    let leftIdx = 0
    let rightIdx = stringNum.length - 1
    while (leftIdx < rightIdx) {
        if (stringNum.charAt(leftIdx++) !== stringNum.charAt(rightIdx--)) {
            return false
        }
    }
    // O(n/2)
    return true
}
