const mysql = require('mysql');
const env = require('env');

const connection = mysql.createConnection(env.mysql);

connection.connect((error) => {
  if (error) {
    console.fatal(error);
    process.exit(1);
  } else {
    console.success(`Connected to MySQL as id=${connection.threadId}`);
  }
});

module.exports = connection;
