function soma(n1, n2) {
    return n1 + n2
}

function subtraction(n1, n2) {
    return n1 - n2
}

function multi(n1, n2) {
    return n1 * n2
}

function division(n1, n2) {
    return n1 / n2
}

module.exports = {
    soma,
    subtraction,
    multi,
    division
}

//-----------------------------------------------------------------

/* Another way

const calculator = {
    multi: (n1, n2) => n1 * n2,
    soma: (n1, n2) => n1 + n2,
    subtraction: (n1, n2) => n1 - n2,
    division: (n1, n2) => n1 / n2
}

module.exports = calculator*/