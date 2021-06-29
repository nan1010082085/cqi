#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program.version('0.0.6')
  .usage('<command> [options]')
  .description('develop a fast tool')
  .command('create [options] <name>', 'create a file template.')
  .command('folder [options] <name>', 'create a module for [vue]')
  .parse(process.argv)
