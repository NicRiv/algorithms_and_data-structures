/**
 * STACKS
 * 
 * (Data Structure)
 * LIFO (Last in, First out)
 */

// functions: push, pop, peek, length

let letters = [] // stack

const word = 'racecar'

let rword = ''

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}
// console.log(letters)

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop()
}
// console.log(rword)

if (rword === word) {
    console.log(`${word} is a palindrome.`)
} else {
    console.log(`${word} is not a palindrome.`)
}

/**
 * creates a function stack
 */
const Stack = function () {
    this.count = 0
    this.storage = {}

    // adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value
        this.count++
    }

    // remove and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) return undefined

        this.count--
        const result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = function () {
        return this.count
    }

    // returns the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1]
    }
}

// Test stack function
const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())