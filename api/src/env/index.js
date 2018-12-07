const path = require('path');
const fs = require('fs');
const deepmerge = require('deepmerge');

let baseConfig = {
  env: process.env.NODE_ENV || 'development',
  mysql: {
    host: 'database',
    user: 'root',
    port: 3306,
  },
  api: {
    port: 3000,
  },
};

const loadConfig = (name) => {
  const pathToConfig = path.resolve(__dirname, `./${name}.js`);

  if (fs.existsSync(pathToConfig)) {
    const config = require(pathToConfig); // eslint-disable-line
    baseConfig = deepmerge(baseConfig, config);

    console.log(`Loaded ${name} config`);
  } else {
    console.log(`No ${name} config`);
  }
};

loadConfig(baseConfig.env);
loadConfig('local');

module.exports = baseConfig;
