const setupInput = function () {
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
  };
};

const input = {
  setupInput,
  handleUserInput
}

module.exports = input.setupInput;