//importing module calculator
const calculator = require('./calculator')

//catching arguments at terminal
const argumentos = process.argv.slice(2)

//manipulate arguments array
let operatorA = Number(argumentos[1])
let operatorB = Number(argumentos[2])
let result = ''

//op condition
if (argumentos[0] === 'soma') {
    result = calculator.soma(operatorA, operatorB)
} else if (argumentos[0] === 'subtraction') {
    result = calculator.subtraction(operatorA, operatorB)
} else if (argumentos[0] === 'multi') {
    result = calculator.multi(operatorA, operatorB)
} else if (argumentos[0] === 'division') {
    result = calculator.division(operatorA, operatorB)
} else {
    result = 'Operação invalida'
}

// this console will return resuts on terminal
console.log(result)