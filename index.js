//importing module calculator
const { soma, subtraction, multi, division } = require('./calculator')


//catching arguments at terminal
const argumentos = process.argv.slice(2)

//manipulate arguments array
let operatorA = Number(argumentos[1])
let operatorB = Number(argumentos[2])
let result = ''

//op condition
if (argumentos[0] === 'soma') {
    result = soma(operatorA, operatorB)
} else if (argumentos[0] === 'subt') {
    result = subtraction(operatorA, operatorB)
} else if (argumentos[0] === 'multi') {
    result = multi(operatorA, operatorB)
} else if (argumentos[0] === 'div') {
    result = division(operatorA, operatorB)
}

// this console will return resuts on terminal
console.log(result)

//-------------------------------------------------------
/* another way

const calculator = require('./calculator')

/*if (argumentos[0] === 'soma') {
    result = calculator.soma(operatorA, operatorB)
} else if (argumentos[0] === 'subtraction') {
    result = calculator.subtraction(operatorA, operatorB)
} else if (argumentos[0] === 'multi') {
    result = calculator.multi(operatorA, operatorB)
} else if (argumentos[0] === 'division') {
    result = calculator.division(operatorA, operatorB)
} else {
    result = 'Operação invalida'
}*/