import fs from 'fs'
import path from 'path'

export const __dirname = process.argv[1].split('bin')[0]

// 控制台参数
export const argv = process.argv.slice(2)

/**
 * 获取文件绝对位置
 * @param {*} url 文件位置 例： components/model/x.ejs
 * @returns 文件绝对位置
 */
 export function pathResolve(url) {
  return path.resolve(__dirname, url)
}

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

// 版本号
function versionString() {
  const packageJson = JSON.parse(fs.readFileSync(pathResolve('package.json'), 'utf8'))
  return packageJson.version
}

export const version = versionString()
