//caso o segundo parâmetro não tenha sido passado
function multiply(a = 1, b = 1) {
    return a * b
};

console.log(multiply(9 * 5));
console.log(multiply(5));
console.log(multiply(8, undefined));
console.log(multiply(3, 0));
console.log(multiply(undefined, 2));


//random number
//lazy evaluation
function randomnum() {
    return Math.random();
};

console.log(randomnum());


function multiplyrandom(a = randomnum(), b = randomnum()) {
    return a * b
};

console.log(multiplyrandom(2, 5));
console.log(multiplyrandom(2));
console.log(multiplyrandom(undefined, 6));