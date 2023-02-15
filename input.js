let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("Successfully disconnected from game server");
    process.exit();
  } else {
    if (data == "w") {
      connection.write("Move: up");
    } else if (data == "s") {
      connection.write("Move: down");
    } else if (data == "a") {
      connection.write("Move: left");
    } else if (data == "d") {
      connection.write("Move: right");
    }

  }
};

const input = {
  setupInput,
  handleUserInput
}

module.exports = input.setupInput;