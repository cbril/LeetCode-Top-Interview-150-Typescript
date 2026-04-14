// 191. Number of 1 Bits  https://leetcode.com/problems/number-of-1-bits

/**
 * Return the number of set bits (1s) in the number's binary representation
 *
 * @param n a positive integer with value between 1 and (2^31)-1
 * @returns the number of set bits in n's binary representation
 * @example the number 3 has binary representation 11, the number of set bits is 2
 */
function hammingWeightAttemptOne(n: number): number {
    // Do I actually need to get the binary representation of the number?
    // That's not what the problem asks for - it just asks for the number of set bits.
    // Here's my approach for finding the set bits only

    // n = 3

    // 1. Find largest exponent
    // 3 = 2^x
    // log2(3) = x
    // floor(1.58) = x
    // 1 = exponent
    // The binary representation contains a set bit in the 2^1 position

    // 2. Find what remains
    // 3 - 2^1 = remaining
    // 3 - 2 = 1
    // the remaining difference is 1 - CONTINUE

    // 1. Find largest exponent
    // 1 = 2^x
    // log2(1) = x
    // floor(0) = x
    // 0 = exponent
    // The binary representation contains a set bit in the 2^0 position

    // 2. Find what remains
    // 1 - 2^0 = remaining
    // 1 - 1 = 0
    // the remaining difference is 0 - STOP

    let remaining = n
    let setBits = 0
    while (remaining > 0) {
        const exponent = Math.floor(Math.log2(remaining))
        remaining = remaining - 2 ** exponent
        setBits++
    }
    return setBits
}

/**
 * Return the number of set bits (1s) in the number's binary representation
 *
 * @param n a positive integer with value between 1 and (2^31)-1
 * @returns the number of set bits in n's binary representation
 * @example the number 3 has binary representation 11, the number of set bits is 2
 */
export function hammingWeightAttemptTwo(n: number): number {
    // The last solution worked but didn't use bit operators

    // n & (n-1) operation will remove the smallest bit
    // continue that operation until all bits are removed and we have 0

    // e.g. n = 3
    // 11 & 10 = 10 --- +1 set bit
    // 10 & 01 = 00 --- +1 set bit
    // we are zero - END

    let remaining = n
    let setBits = 0
    while (remaining > 0) {
        remaining = remaining & (remaining - 1)
        setBits++
    }
    return setBits
}
