import { snakesAndLadders } from "./SnakesAndLadders.js"

describe("909. Snakes and Ladders", () => {
    it("finds the shortest path", () => {
        const board: number[][] = [
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 15, -1, -1, -1, -1]
        ]
        expect(snakesAndLadders(board)).toBe(4)
    })
})
