// 138. Copy List with Random Pointer https://leetcode.com/problems/copy-list-with-random-pointer

import { _Node } from "./Node.js"

/**
 * Create a deep copy of the linked list. What's different about this linked list
 * is that it has a pointer to a random node in the list (or null)
 *
 * @param head the first node (head) of the linked list of length 0 - 1,000
 * @returns the first node (head) of the new linked list
 */
export function copyRandomList(head: _Node | null): _Node | null {
    // Initial brute approach:
    // The main challenge is the random node pointer, because it may point
    // to a node I haven't created yet, and I have to iterate linked lists linearly.

    // I can iterate through the linked list twice.
    // First time I iterate the original linked list, creating copies of each node
    // and populating 'value' and 'next'.
    // Map the original nodes to the node copies.
    // Second time I iterate the copied linked list and update 'random' references
    // to reference the new nodes from the map.

    const nodeCopies = new Map<_Node, _Node>() // Space O(n)
    let prevNodeCopy: _Node | null = null
    let currNode: _Node | null = head
    let copyHead: _Node | null = null
    while (currNode !== null) {
        // Time O(n)
        // Create deep copy
        const nodeCopy = new _Node()
        nodeCopy.val = currNode.val
        // initially, the copy nodes' random pointer will reference
        // the original nodes, but we will correct it later when all the copy nodes exist
        nodeCopy.random = currNode.random

        // Map the original to the copy
        nodeCopies.set(currNode, nodeCopy)

        // Assign 'next' of the previous node
        if (prevNodeCopy !== null) {
            prevNodeCopy.next = nodeCopy
        } else {
            // no previous node means this is the head node
            copyHead = nodeCopy
        }

        prevNodeCopy = nodeCopy
        currNode = currNode.next
    }

    // now iterate the copied linked list to update 'random' pointers to the new copies
    let currNodeCopy: _Node | null = copyHead!
    while (currNodeCopy !== null) {
        // Time O(n)
        if (currNodeCopy.random !== null) {
            const newRandomNode = (currNodeCopy.random = nodeCopies.get(currNodeCopy.random)!)
        }
        currNodeCopy = currNodeCopy.next
    }

    return copyHead
}
