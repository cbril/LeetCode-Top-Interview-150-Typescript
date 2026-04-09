import { copyRandomList } from "./CopyListWithRandomPointer.js"
import { _Node } from "./Node.js"

describe("138. Copy List with Random Pointer", () => {
    it("handles empty list", () => {
        expect(copyRandomList(null)).toBe(null)
    })

    it("deep copies linked list", () => {
        const node1: _Node = new _Node()
        node1.val = 1

        const node2: _Node = new _Node()
        node2.val = 2

        const node3: _Node = new _Node()
        node3.val = 3

        node1.next = node2
        node1.random = node3

        node2.next = node3
        node2.random = null

        node3.random = node1

        const copyHead = copyRandomList(node1)

        expect(copyHead!.val).toEqual(1)
        expect(copyHead!.random!.val).toEqual(3)
        expect(copyHead).not.toBe(node1)
        expect(copyHead!.random).not.toBe(node3)

        expect(copyHead!.next!.val).toEqual(2)
        expect(copyHead!.next!.random).toBeNull()
        expect(copyHead!.next!).not.toBe(node2)

        expect(copyHead!.next!.next!.val).toEqual(3)
        expect(copyHead!.next!.next!.random!.val).toEqual(1)
        expect(copyHead!.next!.next!).not.toBe(node3)
        expect(copyHead!.next!.next!.random!).not.toBe(node1)
    })
})
