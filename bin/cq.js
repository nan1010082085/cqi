#!/usr/bin/env node
import { version } from '../utils/index.js'
import { Command } from 'commander'

const program = new Command()

program.version(version)
  .description('develop a fast tool')
  .command('create [options] <name>', 'create a file template.')
  .command('folder [options] <name>', 'create a module for [vue]')
  .parse(process.argv)
