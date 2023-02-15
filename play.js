const connect = require('./client');
const setupInput = require('./input');
// const inspect = require('util').inspect;


console.log("Connecting ...");
conn = connect();
setupInput(conn);