'use strict'

const fibonacci = (arr = [0,1]) => {
    let limit = 350
    if (arr[arr.length - 1] < limit) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1])
        return fibonacci(arr)
    }
    return arr

}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
