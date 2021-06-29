import fs from 'fs'

// // 获取package.json
// function packageJSon() {
//   return JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, 'utf8'))
// }

// // 版本
// export const version = packageJSon().version

// 控制台参数
export const argv = process.argv.slice(2)

/**
 * file name 名称首字母大写
 * @param {string} name 
 * @returns new name
 */
export function toUpperCase(name) {
  if (name === 'index') {
    return name
  }
  return name.split('-').filter(f => f != '').map(n => n.slice(0, 1).toUpperCase() + n.slice(1)).join('')
}
