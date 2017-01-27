

/*
 * 2.1 Try to refactor code below to es6 using spread
 * https://github.com/lukehoban/es6features#default--rest--spread
 */

const missing = ['shoulders', 'knees'];
const main = ['head', 'and', 'toes'];
const lyrics = main.slice(0, 1).concat(missing).concat(main.slice(1));

// ["head", "shoulders", "knees", "and", "toes"]

console.log(lyrics);


/*
 * 2.2 Try to refactor "copy of array" code below to es6 using spread
 */
const arr = [1, 2, 3];
const arr2 = arr.slice();
arr2.push(4);

console.log(arr, arr2);
