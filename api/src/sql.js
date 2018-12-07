const mysql = require('mysql');

const env = require('env');

const connection = mysql.createConnection({
  host: env.mysql.host,
  user: env.mysql.user,
  port: env.mysql.port,
});

connection.connect((error) => {
  if (error) {
    console.log('Failed to connect to MySQL Server');
    console.error(error);
    process.exit(1);
  } else {
    console.log(`Connected to MySQL as id:${connection.threadId}`);
  }
});

connection.query(`CREATE DATABASE IF NOT EXISTS ${env.mysql.database}`);
connection.query(`USE ${env.mysql.database}`);

const escapeTemplateQuery = (strings, keys) => strings.reduce(
  (query, string, index) => query + string + (keys[index] ? mysql.escape(keys[index]) : ''),
  '',
);

const tagedTemplateQuery = (strings, ...keys) => {
  const safeQuery = escapeTemplateQuery(strings, keys);

  return new Promise((resolve, reject) => {
    connection.query(safeQuery, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

module.exports = tagedTemplateQuery;
