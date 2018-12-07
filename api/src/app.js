const customConsole = require('utils/console'); // eslint-disable-line
global.console = customConsole;

const http = require('http');

const sql = require('utils/sqlTag');
const env = require('env');

const server = http.createServer(async (req, res) => {
  const result = await sql`SHOW DATABASES`;
  res.end(JSON.stringify(result, 2, 2));
});

server.listen(env.api.port, () => console.info(`Api is running on http://localhost:${env.api.port}`));

process.on('uncaughtException', console.fatal);
process.on('unhandledRejection', console.fatal);
