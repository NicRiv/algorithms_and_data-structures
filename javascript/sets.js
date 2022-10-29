/**
 * SETS
 * 
 * (Data structure)
 */

const mySet = function () {
    // the collection will hold the set
    let collection = []

    // check the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    // return all the values in the set
    this.values = function () {
        return collection
    }

    // add element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element)
            return true
        }

        return false
    }

    // remove an element from a set
    this.remove = function (element) {
        if (this.has(element)) {
            const index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }
        return false
    }

    // return the size of the collection
    this.size = function () {
        return collection.length
    }

    // return the union of two sets
    this.union = function (otherSet) {
        const unionSet = new mySet()
        const firstSet = this.values()
        const secondSet = otherSet.values()
        firstSet.forEach(element => {
            unionSet.add(element)
        })
        secondSet.forEach(element => {
            unionSet.add(element)
        })
        return unionSet
    }

    // return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        const intersectionSet = new mySet()
        const firstSet = this.values()
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element)
            }
        })
        return intersectionSet
    }

    // return the difference of two sets as a new set
    this.difference = function (otherSet) {
        const differenceSet = new mySet()
        const firstSet = this.values()
        firstSet.forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element)
            }
        })
        return differenceSet
    }

    // test if the set is a subset of a different set
    this.subset = function (otherSet) {
        const firstSet = this.values()
        return firstSet.every(value => {
            return otherSet.has(value)
        })
    }
}

// Test mySet function
const setA = new mySet()
const setB = new mySet()

setA.add('a')
setB.add('a')
setB.add('b')
setB.add('c')
setB.add('d')

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())

// with Set()
const setC = new Set()
const setD = new Set()

setC.add('A')
setD.add('A')
setD.add('B')
setD.add('C')
setD.add('D')

console.log(setD.values())
setD.delete('A')
console.log(setD.has('A'))