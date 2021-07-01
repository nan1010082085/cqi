#!/usr/bin/env node
import { Command } from 'commander'
import { pathResolve, version } from '../utils/index.js'
import child_process from 'child_process'
import { error } from '../utils/chalk.js'

const program = new Command()

program.version(version)
  .usage('<command> [options]')
  .description('develop a fast tool')
  .option('-cm, --commit <message>', 'Use with caution, the is a git operation >> "git commit & pull & push"')
  .command('create [options] <name>', 'Create file template.')
  .command('folder [options] <name>', 'Create module for [vue]')
  .action((option) => {
    if (option.commit) {
      child_process.exec(`bash ${pathResolve('shell/commit.sh')} ${option.commit}`, (err, stdout, stderr) => {
        if (err) {
          console.log(err)
        }
        console.log(stdout)
        error(stderr)
      })
    }
  })
  .parse(process.argv)
