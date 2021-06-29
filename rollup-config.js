import json from '@rollup/plugin-json'

export default {
  input: {
    input: './main.js',
  },
  plugins: [
    json()
  ]
}
