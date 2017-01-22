
function timeout(duration = 0) {
  return new Promise((resolve) => {
    console.log('called timeout', duration);
    setTimeout(resolve, duration);
  });
}

const timeStart = new Date();

timeout(1000).then(() => {
  console.log('Real Duration', new Date() - timeStart);
})
  .then(() => {
    console.log('Real Duration', new Date() - timeStart);
    throw new Error('ERROR');
  })
  .catch((err) => {
    console.error('catched error', err);
    return Promise.all([timeout(100), timeout(200)]);
  });

