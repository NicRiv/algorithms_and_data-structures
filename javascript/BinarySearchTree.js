/**
 * BINARY SEARCH TREE (BST)
 * 
 * (Data structure)
 */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null
    }

    add(data) {
        const node = this.root

        if (node === null) {
            this.root = new Node(data)
            return
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data)
                        return
                    } else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            }
            return searchTree(node)
        }
    }

    findMin() {
        let current = this.root

        while (current.left !== null) {
            current = current.left
        }

        return current.data
    }

    findMax() {
        let current = this.root

        while (current.right !== null) {
            current = current.right
        }

        return current.data
    }

    find(data) {
        let current = this.root

        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            if (current.data === null) {
                return null
            }
        }

        return current
    }

    isPresent(data) {
        let current = this.root

        while (current) {
            if (data === current.data) {
                return true
            }

            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }

        return false
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null
            }

            if (data === node.data) {
                // node has no children
                if (node.left === null && node.right === null) {
                    return null
                }

                // node has no left children
                if (node.left === null) {
                    return node.right
                }

                // node has no right children
                if (node.right === null) {
                    return node.left
                }

                // node has two children
                let tempNode = node.right

                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }

                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)

                return node
            } else if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else {
                node.right = removeNode(node.right, data)
                return node
            }
        }

        this.root = removeNode(this.root, data)
    }

    /**
     * BINARY SEARCH TREE (Traversal & Height)
     * 
     */
    isBalanced () {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight (node = this.root) {
        if (node === null) {
            return -1
        }

        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)

        if (left < right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    findMaxHeight (node = this.root) {
        if (node === null) {
            return -1
        }

        let left = this.findMaxHeight(node.left)
        let right = this.findMaxHeight(node.right)

        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    inOrder () {
        if (this.root === null) {
            return null
        } else {
            let result = new Array()

            function traverseInOrder (node) {
                node.left && traverseInOrder(node.left)
                result.push(node.data)
                node.right && traverseInOrder(node.right)
            }

            traverseInOrder(this.root)
            return result
        }
    }

    preOrder () {
        if (this.root === null) {
            return null
        } else {
            let result = new Array()

            function traversePreOrder (node) {
                result.push(node.data)
                node.left && traversePreOrder(node.left)
                node.right && traversePreOrder(node.right)
            }

            traversePreOrder(this.root)
            return result
        }
    }

    postOrder () {
        if (this.root === null) {
            return null
        } else {
            let result = new Array()

            function traversePostOrder (node) {
                node.left && traversePostOrder(node.left)
                node.right && traversePostOrder(node.right)
                result.push(node.data)
            }

            traversePostOrder(this.root)
            return result
        }
    }

    levelOrder () {
        let result = []
        let Q = []

        if (this.root !== null) {
            Q.push(this.root)

            while (Q.length > 0) {
                let node = Q.shift()
                result.push(node.data)

                if (node.left !== null) {
                    Q.push(node.left)
                }

                if (node.right !== null) {
                    Q.push(node.right)
                }
            }

            return result
        } else {
            return null
        }
    }
}

// Test BST function
console.log('\nBST')
const bst = new BST()

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.add(4)

console.log(bst.findMin())
console.log(bst.findMax())
bst.remove(7)
console.log(bst.findMax())
console.log(bst.isPresent(4))
// END Test BST function

// Test BST (traversal & height) functions
console.log('\nBST (traversal & height)')
const bst2 = new BST()

bst2.add(9)
bst2.add(4)
bst2.add(17)
bst2.add(3)
bst2.add(6)
bst2.add(22)
bst2.add(5)
bst2.add(7)
bst2.add(20)

console.log('minHeight: ' + bst2.findMinHeight())
console.log('maxHeight: ' + bst2.findMaxHeight())
console.log('isBalanced: ' + bst2.isBalanced())

bst2.add(10)
console.log('minHeight: ' + bst2.findMinHeight())
console.log('maxHeight: ' + bst2.findMaxHeight())
console.log('isBalanced: ' + bst2.isBalanced())

console.log(`inOrder: ${bst2.inOrder()}`)
console.log(`preOrder: ${bst2.preOrder()}`)
console.log(`postOrder: ${bst2.postOrder()}`)
console.log(`levelOrder: ${bst2.levelOrder()}`)