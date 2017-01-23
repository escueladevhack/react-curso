
const DataSource = require('./../../lib/dataSource');

/*
 * 2. Try to refactor this method to es6 using arrow and change this binding.
 * https://github.com/lukehoban/es6features#arrows
 **/

function FooCtrl(FooService) {
  this.user = {};
  const that = this;

  FooService
    .getUser(function (response) { // eslint-disable-line prefer-arrow-callback
      that.user = response;
    });
}

const data = new DataSource();
const ctrs = new FooCtrl(data);

console.log(ctrs.user.name, ctrs.user.age);
