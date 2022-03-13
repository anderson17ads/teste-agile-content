#!/usr/bin/env node
'use strict'

const yargs = require('yargs');
const { App } = require('./dist/app.js');

const options = yargs
  .usage(`
    Welcome CDN Log Convert of Agile Content
    Usage $0 <sourceUrl> <targetPath>
  `)
  .demandCommand(2, 'You need to sourceUrl and targetPath parameter')
  .example(`$0 https://file.txt ./target-path`)
  .help('h')
  .alias('h', 'help')
  .argv;

const [sourceUrl, targetPath] = options._;

const app = new App();
app.init(sourceUrl, targetPath);
