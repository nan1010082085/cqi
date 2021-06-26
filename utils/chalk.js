import chalk from 'chalk'
const log = console.log

/**
 * 输出一条消息
 * @param {string} message 
 * @returns chalk log
 */
export function info(message, title = '') {
  return log(chalk.blue(message), chalk.white(title))
}

/**
 * 输出一条成功消息
 * @param {string} message 
 * @returns chalk log
 */
export function success(message) {
  return log(chalk.green(message))
}

/**
 * 输出一条错误消息
 * @param {string} message 
 * @returns chalk log
 */
export function error(message) {
  return log(chalk.red(message))
}
