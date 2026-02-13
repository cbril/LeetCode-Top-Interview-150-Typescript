/**
 * Find the minimum length of a sub-array in the array with a sum greater than or equal to the target.
 * This solution has O(n^2) time complexity, it does not pass.
 * 
 * @param target the target sum of consecutive numbers in "nums"
 * @param nums array of positive integers
 * @returns the minimal length of a subarray in "nums" that has a sum greater than or equal to "target", or
 *          0 if there is no subarray with such a sum.
 */
function getMinSubArrayLenFirstAttempt(target: number, nums: number[]): number {
    let minSubArrayLen = 0
    let subArrayLen = 0
    let subArraySum = 0

    for (let i = 0; i < nums.length; i++) {
        subArrayLen = 0
        subArraySum = 0

        for (let j = i; j < nums.length; j++) {
            // it can't be shorter than 1
            if ((nums?.[j] || 0) >= target) {
                return 1
            }

            subArrayLen += 1
            subArraySum += nums?.[j] || 0
            if (subArraySum >= target) {
                if (subArrayLen < minSubArrayLen || minSubArrayLen == 0) {
                    minSubArrayLen = subArrayLen
                }
                break
            }
        }
    }
    
    return minSubArrayLen
}

/**
 * Trying new implementation with O(n) time complexity
 * 
 * @param target the target sum of consecutive numbers in "nums"
 * @param nums array of positive integers
 */
function getMinSubArrayLenSecondAttempt(target: number, nums: number[]): number {
    /**
     * In this approach I will move both the start index and end index,
     * instead of only the forward index. And when I reach the target, instead of re-setting the
     * end index, I will keep it the same and move the start index up.
     */

    if (nums.length == 0) {
        return 0
    }

    let startIndex =    0 // start of the sub-array
    let endIndex = 0 // end of the sub-array
    let minSubArrayLen = 0
    let subArrayLen = 1
    let subArraySum = nums[startIndex] || 0

    if (subArraySum >= target) {
        return 1
    }

    while (startIndex < nums.length - 1 || endIndex < nums.length - 1) {
        // move the start index forward if target is reached and start index < end index,
        // or if end index has reached the end of the array
        if ((subArraySum >= target && startIndex < endIndex) || endIndex >= nums.length - 1) {
            subArraySum -= nums[startIndex] || 0
            startIndex += 1
            subArrayLen -= 1
        }        
        // move the end index forward
        else {
            endIndex += 1
            subArraySum += nums[endIndex] || 0
            subArrayLen += 1
        }
        // update min sub-array length if applicable
        if (subArraySum >= target && (subArrayLen < minSubArrayLen || minSubArrayLen == 0)) {
            minSubArrayLen = subArrayLen
            
            // it won't be less than 1
            if (minSubArrayLen == 1) {
                return 1
            }
        }
    }
    return minSubArrayLen
}

function main(): void {
    let target = 4
    let nums = [1, 1, 1, 2, 2, 4]
    console.log(`Target: ${target}, numbers: ${nums}\nMinimum subarray length: ${getMinSubArrayLenSecondAttempt(target, nums)}`)

    target = 10
    nums = [10, 2, 5, 5]
    console.log(`Target: ${target}, numbers: ${nums}\nMinimum subarray length: ${getMinSubArrayLenSecondAttempt(target, nums)}`)

    target = 4
    nums = [2, 1, 3]
    console.log(`Target: ${target}, numbers: ${nums}\nMinimum subarray length: ${getMinSubArrayLenSecondAttempt(target, nums)}`)

    target = 20
    nums = [3, 5, 2, 1, 2, 2]
    console.log(`Target: ${target}, numbers: ${nums}\nMinimum subarray length: ${getMinSubArrayLenSecondAttempt(target, nums)}`)

    target = 1
    nums = []
    console.log(`Target: ${target}, numbers: ${nums}\nMinimum subarray length: ${getMinSubArrayLenSecondAttempt(target, nums)}`)
}

main()
