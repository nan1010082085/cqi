#!/usr/bin/env node
import { Command } from 'commander'
import {version} from '../utils/index.js'

const program = new Command()

program.version(version)
  .usage('<command> [options]')
  .description('develop a fast tool')
  .command('create [options] <name>', 'create a file template.')
  .command('folder [options] <name>', 'create a module for [vue]')
  .parse(process.argv)
