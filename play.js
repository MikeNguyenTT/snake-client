const {connect} = require('./client');

console.log("Connecting ...");
const conn = connect();

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on("connect", () => {
  conn.write("Name: Le");
});