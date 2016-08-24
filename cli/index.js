#!/usr/bin/env node
const clite = require('clite');
clite({
  commands: {
    init: 'cli/init',
    _: 'cli/exec',
  },
  options: ['env', 'port'],
  alias: { V: 'verbose' },
  booleans: [
    'verbose',
  ],
  help: 'usage.txt',
});
