#!/usr/bin/env node
import { Command } from 'commander'
import { version } from '../utils/index.js'

const program = new Command()

program.version(version)

program.usage('<command> [options]')
  .description('develop a fast tool')
  .command('create [options] <message>', 'Create file template.')
  .command('folder [options] <message>', 'Create module for [vue]')
  .command('shell [options] <message>', 'run bash shell')

program.parse(process.argv)
