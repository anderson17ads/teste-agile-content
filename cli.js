#!/usr/bin/env node
'use strict'

const yargs = require('yargs');
const chalk = require('chalk');

const { App } = require('./dist/app.js');

const options = yargs
  .usage(chalk`
    {blue Welcome CDN Log Convert of {gray {bold Agile} C{green.bold o}ntent}}
    {white Usage $0 {yellow <sourceUrl> <targetPath>}}
  `)
  .demandCommand(2, chalk.yellow('You need to sourceUrl and targetPath parameter'))
  .example(chalk.blue(`$0 https://file.txt ./target-path`))
  .help('h')
  .alias('h', 'help')
  .argv;

const [sourceUrl, targetPath] = options._;

const app = new App();
app.init(sourceUrl, targetPath);
