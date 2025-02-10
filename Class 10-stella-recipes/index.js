function processData (number, functionToBeExecutedlater) {
    let result = number * 20
    functionToBeExecutedlater(result)
}

function print(message) {
    console.log(`message: ${
        message
    }`)
}
function printTimes10(number){
    let result = number * 10
    console.log(`result: ${
        result
    }`)
}

processData(100, print)
processData(151, printTimes10)

