

/*
 * 1. Try to refactor code below to es6 using default
 * https://github.com/lukehoban/es6features#default--rest--spread
 */


function getName(firstName, lastName) {
  const fName = firstName || '';
  const lName = lastName || '';

  return `Mr/Mrs ${fName} ${lName}`;
}

console.log(getName('Eva', 'Tester'));
console.log(getName());
