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
  signale: {
    coloredInterpolation: false,
    displayScope: false,
    displayBadge: false,
    displayDate: false,
    displayFilename: false,
    displayLabel: false,
    displayTimestamp: false,
    underlineLabel: false,
    underlineMessage: false,
    underlinePrefix: false,
    underlineSuffix: false,
    uppercaseLabel: false,
  },
};

const loadConfig = (name) => {
  const pathToConfig = path.resolve(__dirname, `./${name}.js`);

  if (fs.existsSync(pathToConfig)) {
    const config = require(pathToConfig); // eslint-disable-line
    baseConfig = deepmerge(baseConfig, config);

    console.config(baseConfig.signale);
    console.info(`Loaded ${name} config`);
  } else {
    console.warn(`No ${name} config`);
  }
};

loadConfig(baseConfig.env);
loadConfig('local');

module.exports = baseConfig;
