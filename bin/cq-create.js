import { program } from "commander";
import { createArgvFile } from '../components/index.js'
import { success } from '../utils/chalk.js'
import { createInquirerPrompt } from '../utils/inquirer.js'
import fs from 'fs'

function isIncludeOption(params) {
  return params.vue2 || params.vue2tsx
}

/**
 * 输出文件
 * @param {name: string, suffix: string, template: buffer}: string config 
 */
function outputFile({ name, suffix, template }) {
  try {
    fs.writeFileSync(`${name}${suffix}`, template)
    success(`create ${name} success .`)
  } catch {
    error(`create ${name} error !`)
  }
}

program
  .description('create a template of vue2')
  .option('-vue2, --vue2 <name>', 'create vue2 template <name>.vue')
  .option('-vue2tsx, --vue2tsx <name>', 'create vue2 <name>.tsx')
  .action(async (params) => {
    // 识别到命令时
    if (isIncludeOption(params)) {
      outputFile(await createArgvFile({
        url: Object.keys(params)[0],
        name: params[Object.keys(params)[0]]
      }))
    } else {
      outputFile(await createArgvFile(await createInquirerPrompt()))
    }
  })
  .parse(process.argv)
