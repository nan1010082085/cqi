// import os from 'os'
// info('当前操作系统', os.type())

// 控制台参数
export const argv = process.argv.slice(2)

/**
 * file name 名称首字母大写
 * @param {string} name 
 * @returns new name
 */
export function toUpperCase(name) {
  if(name === 'index') {
    return name
  }
  return name.split('-').filter(f => f != '').map(n => n.slice(0, 1).toUpperCase() + n.slice(1)).join('') 
}
