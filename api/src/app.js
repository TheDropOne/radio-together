const http = require('http');

const sql = require('sql');
const env = require('env');

const server = http.createServer((req, res) => {
  sql`show databases`.then(result => res.end(JSON.stringify(result, 2, 2)));
});

server.listen(env.api.port, () => console.log(`Api is running on http://localhost:${env.api.port}`));
