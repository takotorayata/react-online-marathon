//Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments. For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, for the 3rd - the function that returns the product of the first two arguments, and the function can multiply both arrays and numbers.

//The overloadedFunc() function returns the result of the default function.

//Usage example:

const func = require('./Checker.js');

function overloadedFunc(
    a = [1, 2, 3], 
    b = 2, 
    multiply = function (a, b) {
        if (Array.isArray(a)) return a.map(el => el * b);
        return a * b;
    }) {
        return multiply(a, b);
}
