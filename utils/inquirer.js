import inquirer from "inquirer";
/**
 * 名称
 */
export function createInquirerPrompt() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'url',
        message: 'please choose file type:',
        choices: [
          'vue2',
          'vue2tsx',
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'please input file name:',
        default: 'index'
      }
    ])
}
