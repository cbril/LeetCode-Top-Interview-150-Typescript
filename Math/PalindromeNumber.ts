// 9. Palindrome number

/**
 * Determine if a number is a palindrome.
 * @param x an integer.
 * @returns true if the integer is a palindrome (reads the same forward and backwards).
 */
function isPalindrome(x: number): boolean {
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

function main(): void {
    let num = 121
    console.log(`${num} is palindrome: ${isPalindrome(num)}\n`)

    num = 321123
    console.log(`${num} is palindrome: ${isPalindrome(num)}\n`)

    num = 1
    console.log(`${num} is palindrome: ${isPalindrome(num)}\n`)

    num = -1
    console.log(`${num} is palindrome: ${isPalindrome(num)}\n`)

    num = 82743652903
    console.log(`${num} is palindrome: ${isPalindrome(num)}\n`)
}

main()
