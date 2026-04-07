import { canConstruct } from "./RansomNote.js"

describe("383. Ransom Note", () => {
    it("case 1", () => {
        expect(canConstruct("cookie", "chocolate chip cookie")).toBe(true)
    })

    it("case 2", () => {
        expect(canConstruct("baddie", "bad")).toBe(false)
    })
})
