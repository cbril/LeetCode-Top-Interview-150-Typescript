// 56. Merge Intervals https://leetcode.com/problems/merge-intervals

/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the
 * non-overlapping intervals that cover all the intervals in the input.
 *
 * @param intervals an array 1-100,000 intervals. One interval is an array of 2 numbers, start and end indices
 * @returns an array of merged, non-overlapping intervals (in the same format as the input)
 */
function mergeAttemptOne(intervals: number[][]): number[][] {
    // Starting with a preliminary "brute force" approach
    // The intervals are not sorted, but this would be easier if they were

    // Sort by interval start ascending
    intervals.sort((a, b) => a[0]! - b[0]!)
    // array.sort time complexity = O(nlogn)

    // Then I would go through each interval in the array,
    // I look ahead at the next interval. If its start index <= this interval's end index,
    // it merges with this interval. Continue looking ahead until I find an interval with
    // no overlap.
    const mergedIntervals: number[][] = []
    for (let i = 0; i < intervals.length; i++) {
        const currIntvlStart: number = intervals[i]![0]!
        let currIntvlEnd: number = intervals[i]![1]!
        // look at future intervals until a non-overlapping interval is found
        for (let j = i + 1; j < intervals.length; j++) {
            const nextIntvlStart: number = intervals[j]![0]!
            const nextIntvlEnd = intervals[j]![1]!

            // there's either an "overlap", e.g.        [1,11], [5,15]  => [1,15]
            // or there's a "subset" interval, e.g.     [1,11], [7,8]   => [1,11]
            // or there's a "touching" interval, e.g.   [1,11], [11,21] => [1,21]

            if (nextIntvlStart <= currIntvlEnd) {
                // merge this interval with the current interval
                currIntvlEnd = Math.max(currIntvlEnd, nextIntvlEnd)
                // skip over merged intervals
                i = j
            } else {
                break
            }
        }
        mergedIntervals.push([currIntvlStart, currIntvlEnd])
    }
    return mergedIntervals
}

/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the
 * non-overlapping intervals that cover all the intervals in the input.
 *
 * @param intervals an array 1-100,000 intervals. One interval is an array of 2 numbers,
 *      start and end indices
 * @returns an array of merged, non-overlapping intervals (in the same format as the input)
 */
export function merge(intervals: number[][]): number[][] {
    // Nested loops aren't a good look - acheive the same without a nested loop
    // Sort by interval start (Time O(nlogn))
    intervals.sort((a, b) => a[0]! - b[0]!)

    // For each interval (Time O(n)), either merge it with the previous interval or add it as a new interval
    const mergedItvls: number[][] = [] // Space O(n) worst O(1) best
    for (const itvl of intervals) {
        const prevItvl = mergedItvls.at(-1)
        // merge if 1st interval end overlaps the 2nd interval start
        if (prevItvl !== undefined && prevItvl[1]! >= itvl[0]!) {
            // update the last interval's end
            prevItvl[1] = Math.max(prevItvl[1]!, itvl[1]!)
        } else {
            mergedItvls.push([...itvl])
        }
    }
    return mergedItvls
}
