// 3. Longest Substring Without Repeating Characters https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * (Incorrect solution - breaks on "dvdf")
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * @param s A string with length 0 - 50,000 containing english letters, numbers, spaces, and symbols
 * @returns The length of the longest substring without duplicate characters
 * @example "abcdab" -> 4 because of "abcd"
 */
function lengthOfLongestSubstringAttemptOne(s: string): number {
    // The obvious solution is to iterate through the string from left to right
    // while tracking the substring length, longest substring found so far,
    // and which characters we have already seen.
    // When a duplicate character is found, the substring length is reset.
    let maxSubstrLen = 0
    let currSubstrLen = 0
    const charsSeen = new Set<string>()
    for (const c of s) {
        if (charsSeen.has(c)) {
            // reset substring tracking
            charsSeen.clear()
            currSubstrLen = 0
        }
        charsSeen.add(c)
        currSubstrLen += 1
        maxSubstrLen = Math.max(maxSubstrLen, currSubstrLen)
    }
    return maxSubstrLen
}

/**
 * Given a string s, find the length of the longest substring without duplicate characters.
 * Time complexity: O(n). Space complexity: O(1)
 *
 * @param s A string with length 0 - 50,000 containing english letters, numbers, spaces, and symbols
 * @returns The length of the longest substring without duplicate characters
 * @example "abcdab" -> 4 because of "abcd"
 */
function lengthOfLongestSubstringAttemptTwo(s: string): number {
    // As LeetCode suggests, we can use a "sliding window".
    // In the case of "dvdf", upon finding the second "d", we should not restart the substring
    // at the second "d". We should move the start of the substring from the first "d"
    // to the first "v".

    // Track the starting and ending indices of the substring as we iterate through the string.
    // Keep track of which characters we've seen and their index within the string.
    // When a duplicate character is found, adjust the substring's starting index to exclude the
    // last character. Then, update the character's index to the current one.

    let maxSubstrLen = 0
    let startIdxExclusive = -1
    const charsSeen = new Map<string, number>() // key = character, value = index of character

    for (let endIdxInclusive = 0; endIdxInclusive < s.length; endIdxInclusive++) {
        const currChar = s[endIdxInclusive]!
        const lastCharIdx = charsSeen.get(currChar)
        if (lastCharIdx !== undefined) {
            // the window should not grow on this condition, only shrink
            if (lastCharIdx > startIdxExclusive) {
                startIdxExclusive = lastCharIdx
            }
        }
        charsSeen.set(currChar, endIdxInclusive)
        const substrLen = endIdxInclusive - startIdxExclusive
        maxSubstrLen = Math.max(maxSubstrLen, substrLen)
    }
    return maxSubstrLen
}

function main() {
    let s = "abcdab"
    let longestLen = lengthOfLongestSubstringAttemptTwo(s)
    console.log(`Longest substring in "${s}" has length ${longestLen}\n`)

    s = ""
    longestLen = lengthOfLongestSubstringAttemptTwo(s)
    console.log(`Longest substring in "${s}" has length ${longestLen}\n`)

    s = "dvdf" // should be 3
    longestLen = lengthOfLongestSubstringAttemptTwo(s)
    console.log(`Longest substring in "${s}" has length ${longestLen}\n`)

    s = "aaaa! aaaa!aaa aaaaagrcaobd!" // should be 8
    longestLen = lengthOfLongestSubstringAttemptTwo(s)
    console.log(`Longest substring in "${s}" has length ${longestLen}\n`)
}

main()
