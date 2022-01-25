// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

function luckyNumbers(num) {
    let returnArray = []
    let temp 

    while (returnArray.length < num) {
        temp = Math.floor(Math.random() * 10)

        if (returnArray.includes(temp)) {
            temp = Math.floor(Math.random() * 10)
        } else {
            returnArray.push(temp)
        }
    }

    console.log(returnArray)
    return returnArray
}

luckyNumbers(9)