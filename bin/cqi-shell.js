import { program } from "commander";
import { pathResolve } from '../utils/index.js'
import child_process from 'child_process'
import { error } from '../utils/chalk.js'

program
  .description('bash shell cmd')
  .option('-cm, --commit <message>', 'Use with caution, the is a git operation >> "git commit & pull & push"')
  .option('-am, --amend', 'git add . && git commit --amend --no-edit')
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
    if(option.amend) {
      child_process.exec(`git add . && git commit --amend --no-edit`, (err, stdout, stderr) => {
        if (err) {
          console.log(err)
        }
        console.log(stdout)
        error(stderr)
      })
    }
  })
  .parse(process.argv)
