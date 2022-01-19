const {connect} = require('./client');

console.log("Connecting ...");
const conn = connect();

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on("connect", () => {
  conn.write("Name: Le");
});

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

const stdin = setupInput();
stdin.on("data", handleUserInput);