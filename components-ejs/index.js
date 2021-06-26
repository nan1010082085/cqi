import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import { toUpperCase } from '../utils/index.js'

/**
 * 接受参数直接创建文件
 * @param {*} config [0: 模版名称, 1: 文件名称]
 * @returns 
 */
export function createArgvFile(config) {
  // 文件后缀 这里要优化成枚举
  let suffix = config.url.indexOf('tsx') !== -1 ? '.tsx' : '.vue'
  const template = fs.readFileSync(path.join(process.cwd(), `/components-ejs/model/${config.url}.ejs`), 'utf8')
  let name = config.name ? config.name : 'index'
  const ejsConfig = {
    name: toUpperCase(name)
  }
  // name 文件的参数, 文件名称存在 - 需要解析转成大写传入文件中
  let code = ejs.render(template.toString(), ejsConfig)
  return {
    name,
    suffix,
    template: code
  }
}


export function createArgvFolder() { }
