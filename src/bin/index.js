#!/usr/bin/env node
import program from 'commander';
import GeoData from '..';

program
  .version('0.1.0', '-v, --version')
  .arguments('[ip]')
  .action(async (ip) => {
    const geoData = new GeoData();
    console.log(await geoData.get(ip));
  })
  .parse(process.argv);
