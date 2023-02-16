const inspect = require('util').inspect;

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

const handleUserInput = (data) => {
  exitGame(data)
  snakeMovement(data);
  sendMessage(data);
};

const exitGame = (key) => {
  if (key === "\u0003") {
    console.log("Successfully disconnected from game server");
    process.exit();
  } 
};

const snakeMovement = (key) => {
  if (key == "w") {
    connection.write("Move: up");
  } else if (key == "s") {
    connection.write("Move: down");
  } else if (key == "a") {
    connection.write("Move: left");
  } else if (key == "d") {
    connection.write("Move: right");
  }
};

const sendMessage = (key) => {
  if (key === '\r') {
    connection.write("Say: yum")
  };
};

const input = {
  setupInput,
  handleUserInput,
  exitGame,
  snakeMovement,
  sendMessage
}

module.exports = input.setupInput;