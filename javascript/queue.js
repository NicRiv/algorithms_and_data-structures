/**
 * QUEUE
 * 
 * (Data structure)
 * FIFO (first in, first out)
 */

const Queue = function () {
    let collection = []

    // show de elements
    this.print = function () {
        console.log(collection)
    }

    // add an element to the back of the collection
    this.enqueue = function (element) {
        collection.push(element)
    }

    // pull an element from the front of the collection 
    this.dequeue = function () {
        return collection.shift()
    }

    // return the front of the collection
    this.front = function () {
        return collection[0]
    }

    // return the size of the collection
    this.size = function () {
        return collection.length
    }

    // return true if the collection is empty, else return false
    this.isEmpty = function () {
        return (collection.length === 0)
    }
}

// Test Queue function
console.log('\nQueue')
const q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())
q.print()
// END Test Queue function

/**
 * PRIORITY QUEUE
 */

const PriorityQueue = function () {
    let collection = []

    this.printCollection = function () {
        console.log(collection)
    }

    // check priority of each element
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element)
                    added = true
                    break
                }
            }
            if (!added) collection.push(element)
        }
    }

    this.dequeue = function () {
        const value = collection.shift()
        return value[0]
    }

    this.front = function () {
        return collection[0]
    }

    this.size = function () {
        return collection.length
    }

    this.isEmpty = function () {
        return (collection.length === 0)
    }
}

// Test PriorityQueue function
console.log('\nPriority Queue')
const pq = new PriorityQueue()

pq.enqueue(['Frutilla', 2])
pq.enqueue(['Melon', 3])
pq.enqueue(['Manzana', 1])
pq.enqueue(['Frambuesa', 2])

pq.printCollection()
pq.dequeue()
console.log(pq.front())
pq.printCollection()