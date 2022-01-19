const net = require("net");
const { IP, PORT, USERNAME } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on("connect", () => {
    conn.write(`Name: ${USERNAME}`);
  });

  return conn;
};

module.exports = {connect};