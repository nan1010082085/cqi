#!/usr/bin/env node
import { argv } from '../utils/index.js'
import { Command } from 'commander'

console.log(argv)

const program = new Command()

program.version('0.0.1')
  .description('develop a fast tool')
  .command('create [options] <name>', 'create a file template.')
  .command('folder [options] <name>', 'create a module for [vue]')
  .parse(process.argv)
