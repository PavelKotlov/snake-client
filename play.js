const connect = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
const inspect = require('util').inspect;
const handleUserInput = function (data) {
  console.log("The data is: ", inspect(data));
  if (data === "\u0003") {
    process.exit();
    console.log("Successfully disconnected from game server");
  };
};

setupInput();
console.log("Connecting ...");
connect();