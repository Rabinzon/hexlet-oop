#!/usr/bin/env node
import program from 'commander';
import getGeo from '..';

program
  .version('0.1.0', '-v, --version')
  .arguments('[ip]')
  .action(async (ip) => {
    console.log(await getGeo(ip));
  })
  .parse(process.argv);
