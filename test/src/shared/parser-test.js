let test = require('tape')
let parser = require('../../../src/shared/parser')

test('Set up env', t => {
  t.plan(1)
  t.ok(parser, 'Parser found')
})

test('Text input', t => {
  t.plan(2)
  let id = 'yay'
  let text = 'hi there'
  let input = `
@@text ${id}
${text}
`
  let result = parser(input)
  t.equal(result[id], text, 'Parsed text without mutation')

  input = `
@@ text ${id}
${text}
`
  result = parser(input)
  t.equal(result[id], text, 'Parsed text with leading space without mutation')
})

test('Markdown input', t => {
  t.plan(2)
  let id = 'yay'
  let text = '[hi **there**](https://faststack.org)'
  let input = `
@@${id}
${text}
`
  let result = parser(input)
  t.ok(result[id].includes('<a href="https://faststack.org">hi <strong>there</strong></a>'), 'Parsed markdown')

  input = `
@@ ${id}
${text}
`
  result = parser(input)
  t.ok(result[id].includes('<a href="https://faststack.org">hi <strong>there</strong></a>'), 'Parsed markdown with leading space')
})

test('Markup input', t => {
  t.plan(1)
  let id = 'yay'
  let text = `<a href="/foo">
 <img src="foo.jpg">
</a>`
  let input = `
@@${id}
${text}
`
  let result = parser(input)
  t.equal(result[id], text, 'Markdown parser passed through markup')
})

test('Dasherize properties', t => {
  t.plan(1)
  let id = 'hi there pardner'
  let text = 'howdy'
  let input = `
@@text ${id}
${text}
`
  let result = parser(input)
  t.equal(result['hi-there-pardner'], text, 'Dasherized param with spaces')
})

test('No ID throws', t => {
  t.plan(1)
  let text = 'howdy'
  let input = `
@@
${text}
`
  t.throws(() => {
    console.log(parser(input))
  }, 'Line with only @@ throws')
})
