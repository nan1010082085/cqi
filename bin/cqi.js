#!/usr/bin/env node
import { Command } from 'commander'
import { version } from '../utils/index.js'

const program = new Command()

program.version(version)

program.usage('<command> [options]')
  .description('develop a fast tool')
  .command('create [options] <name>', 'Create file template.')
  .command('folder [options] <name>', 'Create module for [vue]')
  .command('shell [options] <name>', 'run bash shell')

program.parse(process.argv)
