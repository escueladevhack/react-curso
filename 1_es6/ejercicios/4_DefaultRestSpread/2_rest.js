

/*
 * 2. Try to refactor code below to es6 using rest
 * https://github.com/lukehoban/es6features#default--rest--spread
 */

function getAllArgs(a, b) {
  const args = Array.prototype.slice.call(arguments, getAllArgs.length); // eslint-disable-line prefer-rest-params, max-len

  console.log('My arguments', a, b);

  return args;
}

console.log('Others', getAllArgs(1, 2, 3, { test: 'test' }));
