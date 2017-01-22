/*
 * 1. Try to refactor this method to es6 using arrow
 * https://github.com/lukehoban/es6features#arrows
**/

const numbers = [1, 2, 3, 4, 5];
const timesTwo = numbers.map(number => number * 2);
console.log(timesTwo); // [2, 4, 6, 8, 10]
