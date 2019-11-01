let md = require('marked')
md.setOptions({
  gfm: true,
  breaks: true
})

/**
 * Parse structured markdown (or plaintext) to JS object
 * ```
 * @@text title
 * FASTstack.org
 *
 * @@section1
 * a `code example`, **wow**
 *
 * @@ moreStuff
 * <a href="/foo">
 *   <img src="foo.jpg">
 * </a>
 *
 * ```
 * Returns the following object:
 * ```
 * {
 *   title: 'FASTstack.org',
 *   moreStuff: 'a <code>code example</code>, <strong>wow</strong>',
 *   moreStuff: '<a href="/foo">
 *   <img src="foo.jpg">
 * </a>'
 * }
 * ```
 */
module.exports = function contentParser (input) {
  // Don't mutate the intput
  let content = JSON.parse(JSON.stringify(input))
  let obj = {}
  function parser (str) {
    // TODO add support for ${arc.static('assetname.ext')}?
    let parts = str.split('\n')
    // Get the ID
    let id = parts.shift()
    id = id.replace('@@ ', '').replace('@@', '').split(' ')
    // Remove text directive
    let isText = id[0] && id[0] === 'text' || id[0] === 'txt'
    if (id.length > 1 && isText) id.shift()
    id = id.join('-')
    if (!id) throw Error('Content needs ID')
    // Maybe mutate content
    let content = parts.join(`\n`).trim()
    // if (type === '@md' || type === '@markdown') content = md(content)
    obj[id] = isText ? content : md(content)
  }
  let test = /^@@.*?(?=^@@|($(?![\r\n])))/gims
  content.replace(test, parser)
  return obj
}
