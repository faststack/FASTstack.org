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
    hero,
    intro,
    whatIsFASTstackHeader,
    whatIsFASTstack,
    functionsHeader, functions,
    APIsHeader, APIs,
    storageHeader, storage,
    testabilityHeader, testability,
    getStartedHeader,
    getStarted,
    message,
  } = parsed
  let body = `
      <h1 class="center-text">
        FASTstack
      </h1>
      <h1 style="font-weight: normal">
        ${hero}
      </h1>

      ${intro}

      <h3>
        ${whatIsFASTstackHeader}
      </h3>

      ${whatIsFASTstack}

      <h2 class="center-text">
        ${functionsHeader}
      </h2>
      ${functions}

      <h2 class="center-text">
        ${APIsHeader}
      </h2>
      ${APIs}

      <h2 class="center-text">
        ${storageHeader}
      </h2>
      ${storage}

      <h2 class="center-text">
        ${testabilityHeader}
      </h2>
      ${testability}

      <h3>
        ${getStartedHeader}
      </h3>

      ${getStarted}

      <p class="center-text" style="margin-top: 100px">
        ${message}
      </p>
  `
  return {title, description, body}
}
