"use strict"; //strict mode


function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;   
}

function divide(number1, number2) {
    return number1 / number2;
}

function percentage(number1, number2) {
    if(number2 ==0)
    return (number1 / number2) * 100;

}

function oppositesign(number1) {
    return (number1)*(-1);
}


module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.percentage = percentage;
module.exports.oppositesign = oppositesign;

