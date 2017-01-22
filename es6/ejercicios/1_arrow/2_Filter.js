

/*
* 2. Try to refactor this method to es6 using arrow
* https://github.com/lukehoban/es6features#arrows
**/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const es5OddNumbers = numbers.filter(number => number % 2);
console.log(es5OddNumbers);
