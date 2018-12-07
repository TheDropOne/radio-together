const mysql = require('mysql');
const connection = require('connection');

const escapeTemplateQuery = (strings, keys) => strings.reduce(
  (query, string, index) => query + string + (keys[index] ? mysql.escape(keys[index]) : ''),
  '',
);

const tagedTemplateQuery = (strings, ...keys) => {
  const safeQuery = escapeTemplateQuery(strings, keys);

  return new Promise((resolve, reject) => {
    connection.query(safeQuery.trim(), (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

module.exports = tagedTemplateQuery;
