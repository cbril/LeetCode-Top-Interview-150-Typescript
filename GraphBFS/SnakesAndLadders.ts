/**
 * 909. Snakes and Ladders
 * https://leetcode.com/problems/snakes-and-ladders
 */

/**
 * Returns the minimum number of moves required to traverse the snakes and ladders board.
 * Returns -1 if there is no path to the end.
 * -1 represents an open space, and any other number represents a snake/ladder destination label.
 * On each move, you may move forward between 1 and 6 squares. On one move, you may only
 * travel one snake/ladder.
 * @param board snakes and ladders board of size n x n with squares labeled from 1 to n2 
 *  in Boustrophedon style, starting from the bottom left corner.
 * @returns the minimum number of moves to traverse the board.
 */
function snakesAndLadders(board: number[][]): number {
    // Flatten the 2-dimensional matrix to a 1-dimensional list. 
    // Necessary to build the adjacency list later.
    const boardList: number[] = []
    // Board reads from bottom to top.
    board.reverse()
    for (let r = 0; r < board.length; r++) {
        const row = board[r]
        // Board alternates between reading left-to-right and right-to-left.
        if (r % 2 == 1) {
            row?.reverse()
        }
        boardList.push(...row!)
    }

    // The game board can be represented as a graph, with each vertex representing a square on
    // the board with up to 6 adjacent squares.
    // Represent the graph with an adjacency list.
    type Label = number
    type AdjacentLabels = Label[]
    type AdjacencyList = { [key: Label] : AdjacentLabels }
    const adjacentSquares: AdjacencyList = {}

    for (let label = 1; label < boardList.length; label++) {
        const destLabels: AdjacentLabels = []
        for (let dest = label+1; dest <= Math.min(label+6, boardList.length); dest++) {
            if (boardList[dest-1] != -1) {
                destLabels.push(boardList[dest-1]!)
            } else {
                destLabels.push(dest)
            }
        }    

        adjacentSquares[label] = destLabels
    }
    
    // Use BFS on our graph to find the shortest path from the start to the end.
    // Memory of how many moves were taken and which squares were visited.
    type Position = [label: Label, moves: number, path: AdjacentLabels]

    // Queue for FIFO processing of adjacent squares.
    const queue: Position[] = [[1, 0, [1]]]
    // Use "head" as a pointer to first queue element, to avoid using .shift() O(n).
    let head = 0

    // Memory of which squares were already visited (or queued to be visited).
    const visited: Set<Label> = new Set<Label>()
    visited.add(1)
    
    while (head < queue.length) {
        const position = queue[head++]!
        const [label, moves, path] = position
        if (label === boardList.length) {
            // The path to the end was found. 
            // BFS ensures that the first path found is the shortest.
            return moves
        }
        if (!adjacentSquares[label]) {
            continue
        }
        for (const nextSquare of adjacentSquares[label]!) {
            if (!visited.has(nextSquare)) {
                queue.push([nextSquare, moves+1, path.concat([nextSquare])])
                visited.add(nextSquare)
            }
        }
    }
    // No path to the end was found.
    return -1
}

function main(): void {
    let board: number[][] = [
        [-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1],
        [-1,35,-1,-1,13,-1],
        [-1,-1,-1,-1,-1,-1],
        [-1,15,-1,-1,-1,-1]]
    console.log(`Board:\n${board}\nMinimum path: ${snakesAndLadders(board)}\n\n`)
}

main()
