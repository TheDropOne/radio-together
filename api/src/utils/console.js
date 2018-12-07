const { Signale } = require('signale');

const console = new Signale({
  types: {
    // await
    // complete
    error: {
      badge: '',
      color: 'red',
      label: 'error',
    },
    debug: {
      badge: '',
      color: 'red',
      label: 'debug',
    },
    fatal: {
      badge: '',
      color: 'red',
      label: 'fatal',
    },
    // fav
    // info
    info: {
      badge: '',
      color: 'blue',
      label: 'info',
    },
    // note
    // pause
    // pending
    // star
    // start
    // success
    warn: {
      badge: '',
      color: 'yellow',
      label: 'warn',
    },
    // watch
  },
});

module.exports = console;
