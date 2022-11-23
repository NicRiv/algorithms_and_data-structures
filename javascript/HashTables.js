/**
 * HASH TABLES
 * also: hash map.
 * 
 * (Data structure)
 * key => value
 */

const Hash = (string, max) => {
    let hash = 0

    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i)
    }

    return hash % max
}

const HashTable = function () {
    let storage = []
    const storageLimit = 20

    this.print = function () {
        console.log(storage)
    }

    this.add = function (key, value) {
        let index = Hash(key, storageLimit)

        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false

            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value
                    inserted = true
                }
            }

            if (inserted === false) {
                storage[index].push([key, value])
            }
        }
    }

    this.remove = function (key) {
        let index = Hash(key, storageLimit)

        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index]
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index]
                }
            }
        }
    }

    this.lookup = function (key) {
        let index = Hash(key, storageLimit)

        if (storage[index] === undefined) {
            return undefined
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1]
                }
            }
        }
    }
}

// Test Hash Table function
console.log('\nHash Table')

// hash function
console.log('\n')
const food = 'pizza'
const buckets = 10
console.log(`Hash function for ${food}: ${Hash(food, buckets)} `)

// hash table
console.log('\n')
let ht = new HashTable()

ht.add('John', 'Sunday')
ht.add('Elisa', 'Tuesday')
ht.add('Nico', 'Monday')

console.log(ht.lookup('Elisa'))
ht.print()