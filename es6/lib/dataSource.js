class DataSource {
  constructor() {
    this.user = {
      name: 'John',
      age: 30,
    };
  }
  getUser(cb) {
    return cb(this.user);
  }
}

module.exports = DataSource;
