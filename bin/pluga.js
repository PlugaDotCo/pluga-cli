#!/usr/bin/env node

const program = require('../lib');

program.parse(process.argv);
if (!process.argv.slice(2).length) program.help();
