let parser = require('@architect/shared/parser')
let fs = require('fs')
let {join} = require('path')
let read = file => fs.readFileSync(file).toString()

module.exports = function template () {
  let raw = read(join(__dirname, `index.md`))
  let parsed = parser(raw)
  let {
    title,
    description,
    intro
  } = parsed
  let body = `
      <h1 class="center-text">
        FASTstack
      </h1>

      ${intro}
  `
  return {title, description, body}
}
